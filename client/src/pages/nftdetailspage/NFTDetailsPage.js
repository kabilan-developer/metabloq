import React from 'react'
import NFTDetails from '../../components/nftdetails'


function NFTDetailsPage(props) {
  let {LiveAuctionData} = props;
  
  return (
    <div className='mt-3'>
        <NFTDetails LiveAuctionData={LiveAuctionData}/>
    </div>
  )
}

export default NFTDetailsPage