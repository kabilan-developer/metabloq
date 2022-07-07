// constants
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import store from "./store";


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

export const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

export const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

// const updateAccountRequest = (payload) => {
//   return {
//     type: "UPDATE_ADDRESS",
//     payload: payload,
//   };
// };

const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          //infuraId: process.env.REACT_APP_INFURA_ID
          rpc: {
            56: "https://bsc-dataseed.binance.org",
            97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
          }
        }
      }
    }

    return providerOptions;
}

export const connectWallet = () => {
    return async(dispatch) => {
        dispatch(connectRequest());
        try {
            const web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions: getProviderOptions() // required
            });
    
            const provider = await web3Modal.connect();
            // const tokenContractAddress = '';
    
            await subscribeProvider(provider);
            
            const web3 = new Web3(provider);
        
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
        
            // const token = new web3.eth.Contract(
            //   tokenContract,
            //   //tokenContract.output.abi,
            //   tokenContractAddress
            // );


            if(window.ethereum && window.ethereum.networkVersion !== '56') {
              await addNetwork(56);
            }

            dispatch(
                connectSuccess({
                    address,
                    web3,
                    provider,
                    connected: true,
                    web3Modal
                })
            );
        } catch (e) {
            dispatch(connectFailed(e));
        }
    }
}

const subscribeProvider = async(provider) => {
    if (!provider.on) {
      return;
    }

    provider.on('connect', async(id) => {
      console.log(id);
    });

    provider.on("networkChanged", async (networkId) => {
      if(networkId !== '56') {
        console.log(networkId);
        store.dispatch(connectFailed('Please switch to Binance mainnet'));
      } else {
        store.dispatch(connectWallet());
      }
    });
}

export async function addNetwork(id) {
  let networkData;
  switch (id) {
    //bsctestnet
    case 97:
      networkData = [
        {
          chainId: "0x61",
          chainName: "BSCTESTNET",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];

      break;
    //bscmainet
    case 56:
      networkData = [
        {
          chainId: "0x38",
          chainName: "BSCMAINET",
          rpcUrls: ["https://bsc-dataseed1.binance.org"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];
      break;
    default:
      break;
  }
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

(() => {
  if(window.ethereum) {
    window.ethereum.on('networkChanged', function(networkId){
      if(networkId !== '56') {
        console.log(networkId);
        store.dispatch(connectFailed('Please switch to Binance mainnet'));
      } else {
        store.dispatch(connectWallet());
      }
    });
  }
})();



