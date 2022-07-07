import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "./redux/WalletAction";

import "./App.css";
import AppRoutes from "./helpers/AppRoutes";
import useWindowDimensions from "./helpers/useWindowDimensions";

const App = () => {

    const wallet = useSelector(state => state.WalletConnect);
    const dispatch = useDispatch();
    const {width} = useWindowDimensions();
    console.log("screen width = ",width);

    useEffect(() => {
        const {web3Modal} = wallet;
        if(web3Modal.cachedProvider) {
            dispatch(connectWallet());
        }
        // eslint-disable-next-line
    }, []);

    return (
            <div className="App">
                <AppRoutes/>
            </div>
    );
}

export default App;
