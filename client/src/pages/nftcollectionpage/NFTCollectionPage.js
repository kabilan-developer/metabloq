import React from 'react'
import NFTCollectionSection from '../../components/nftcollection'
import WavesBanner from '../../components/wavesbanner'
import './NFTCollectionPage.css'

function NFTCollectionPage(props) {
  let {collections} = props;
  return (
    <div>
        <WavesBanner collections={collections}/>
        <NFTCollectionSection collections={collections}/>
    </div>
  )
}

export default NFTCollectionPage