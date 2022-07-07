import React from 'react'
import { Stack } from 'react-bootstrap'
import CollectorsCollectionCard from '../../components/collectorsCollectionCards'
import CollectorsProfile from '../../components/collectorsprofile'
import NFTDetailsCards from '../../components/nftdetails/NFTDetailsCards'

function CollectorsPage() {
  return (
    <div className='metabloq_container'>
        <Stack gap={5}>
            <CollectorsProfile/>
            <NFTDetailsCards collectors="collectors"/>
            <CollectorsCollectionCard/>
        </Stack>
        
    </div>
  )
}

export default CollectorsPage