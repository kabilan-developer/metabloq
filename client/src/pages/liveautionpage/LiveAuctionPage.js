import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AllLiveAuction from '../../components/SmallComponents/AllLiveAuction';
import HighestBidSort from '../../components/SmallComponents/HighestBidSort';
import AuthorSort from '../../components/SmallComponents/AuthorSort';
import CollectionSort from '../../components/SmallComponents/CollectionSort';


function LiveAuctionPage() {
  return (
    <div className='metabloq_container mt-3'>
        <div className='nftdetails_cards-menu '>
        <h3 className='bold text-left poppins'>
            Live Auction
        </h3>
        <div className='ms-auto nftdetails_cards-tabs'>
            <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="All" className="poppins" title="All">
                        <AllLiveAuction/>
                    </Tab>
                    <Tab eventKey="Author" className="poppins" title="Author">
                        <AuthorSort/>
                    </Tab>
                    <Tab eventKey="Highest Bid" className="poppins" title="Highest Bid">
                        <HighestBidSort/>
                    </Tab>
                    <Tab eventKey="Collection" className="poppins" title="Collection">
                        <CollectionSort/>
                    </Tab>
                </Tabs>
        </div>
        </div>

    </div>
  )
}

export default LiveAuctionPage