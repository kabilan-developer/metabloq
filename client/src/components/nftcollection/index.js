import React, { useState } from "react";
import { Stack, Tab, Tabs } from "react-bootstrap";
import NFTCollectionCards from "./NFTCollectionCards";
import "./Styles.css";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import MobileFilterBtn from "../SmallComponents/MobileFilterBtn";
import { FiFilter } from "react-icons/fi";
import Slide from "react-reveal/Slide";
import useSound from "use-sound";
import buttonSound from "../../assets/audio/button.wav";
import Drawer from "@mui/material/Drawer";
import WebFilter from "../SmallComponents/WebFilter";
import CollectorsCollectionCard from "../collectorsCollectionCards";
import ArtCollection from "../SmallComponents/ArtCollection";
import BuildingCollection from "../SmallComponents/BuildingCollection";
import VirtualCollection from "../SmallComponents/VirtualCollection";
import MetapetsCollection from "../SmallComponents/MetapetsCollection";
import WearablesCollection from "../SmallComponents/WearablesCollection";
import MiscellaneousCollection from "../SmallComponents/MiscellaneousCollection";
import HighestBidSort from "../SmallComponents/HighestBidSort";
import CollectionSort from "../SmallComponents/CollectionSort";
import AuthorSort from "../SmallComponents/AuthorSort";
import {useSelector} from 'react-redux'

function NFTCollectionSection(props) {
  let { collections } = props;
  const { width } = useWindowDimensions();
  const [playSound] = useSound(buttonSound);
  const [showFilter, setShowFilter] = useState(false);
  const [rangeSlider, setRangeSlider] = useState(10);

  const activeTab = useSelector(state => state.TabReducer);
  console.log("activetab",activeTab);

  const rangeSliderChange = (value) => {
    setRangeSlider(value);
  };
  const horizontalLabels = {
    0: "0.01 XDC",
    100: "100 XDC",
  };


  return (
    <div className="metabloq_container">
      <Stack gap={4}>
        <Slide top>
          {width < 600 ? (
            <>
            <MobileFilterBtn collections={collections}/>
            <div className="filter-tabs raleway">
            <Tabs
              defaultActiveKey={activeTab.loadTab}
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                onClick={() => playSound()}
                eventKey="All Items"
                title="All Items"
                
              >
              {collections ? (
                  <CollectorsCollectionCard collections="collections" />
                  ) : (
                  <NFTCollectionCards />
                  )}
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Art"
                title="Art"
                
              >
                {collections ? (
                <ArtCollection art="Art"/>
                ) : (
                <HighestBidSort/>
                )}
                
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Buliding"
                title="Building"
                
              >
                 {collections ? (
                <BuildingCollection building="Buildings"/>
                ) : (
                <CollectionSort/>
                )}
                
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Real Estate"
                title="Virtual Real Estate"
                
              >
                 {collections ? (
                <VirtualCollection virtual="Virtual Real Estate"/>
                ) : (
                <AuthorSort/>
                )}
                
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Meta Pets"
                title="Meta Pets"
                
              >
                 {collections ? (
                <MetapetsCollection meta = "Meta pets"/>
                ) : (
                <NFTCollectionCards />
                )}
                
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Wearables"
                title="Wearables"
                
              >
                  {collections ? (
                <WearablesCollection wear="Wearables"/>
                ) : (
                  <CollectionSort/>
                )}
                
              </Tab>
              <Tab
                onClick={() => playSound()}
                eventKey="Miscellaneous"
                title="Miscellaneous"
              >
                   {collections ? (
                <MiscellaneousCollection miscellaneous="Miscellaneous"/>
                ) : (
                  <HighestBidSort/>
                )}
                
              </Tab> 
              <Tab
              className="ms-auto"
                title={
                  <div
                  onClick={() => {
                  setShowFilter(true);
                  playSound();
                  }}
                  className="nftcollection_filter-div-gradient"
                  >
                  <small className="d-flex align-items-center">
                  Filter & Sort <FiFilter />
                  </small>
                  </div> 
               }
                  > 
              </Tab>     
            </Tabs>

           
            <Drawer
              anchor="right"
              open={showFilter}
              onClose={() => setShowFilter(false)}
              style={{ width: "30% !important" }}
              PaperProps={{
                sx: { width: "60%" },
                style: { width: "25%" },
              }}
            >
              <WebFilter
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                rangeSlider={rangeSlider}
                rangeSliderChange={rangeSliderChange}
                horizontalLabels={horizontalLabels}
                collections={collections}
              />
            </Drawer>
          </div>
          </>
          ) : (
            <div className="filter-tabs raleway">
              <Tabs
                defaultActiveKey={activeTab.loadTab}
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  onClick={() => playSound()}
                  eventKey="All Items"
                  title="All Items"
                  
                >
                {collections ? (
                    <CollectorsCollectionCard collections="collections" />
                    ) : (
                    <NFTCollectionCards />
                    )}
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Art"
                  title="Art"
                  
                >
                  {collections ? (
                  <ArtCollection art="Art"/>
                  ) : (
                  <HighestBidSort/>
                  )}
                  
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Buliding"
                  title="Building"
                  
                >
                   {collections ? (
                  <BuildingCollection building="Buildings"/>
                  ) : (
                  <CollectionSort/>
                  )}
                  
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Real Estate"
                  title="Virtual Real Estate"
                  
                >
                   {collections ? (
                  <VirtualCollection virtual="Virtual Real Estate"/>
                  ) : (
                  <AuthorSort/>
                  )}
                  
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Meta Pets"
                  title="Meta Pets"
                  
                >
                   {collections ? (
                  <MetapetsCollection meta = "Meta pets"/>
                  ) : (
                  <NFTCollectionCards />
                  )}
                  
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Wearables"
                  title="Wearables"
                  
                >
                    {collections ? (
                  <WearablesCollection wear="Wearables"/>
                  ) : (
                    <CollectionSort/>
                  )}
                  
                </Tab>
                <Tab
                  onClick={() => playSound()}
                  eventKey="Miscellaneous"
                  title="Miscellaneous"
                >
                     {collections ? (
                  <MiscellaneousCollection miscellaneous="Miscellaneous"/>
                  ) : (
                    <HighestBidSort/>
                  )}
                  
                </Tab> 
                <Tab
                className="ms-auto"
                  title={
                    <div
                    onClick={() => {
                    setShowFilter(true);
                    playSound();
                    }}
                    className="nftcollection_filter-div-gradient"
                    >
                    <small className="d-flex align-items-center">
                    Filter & Sort <FiFilter />
                    </small>
                    </div> 
                 }
                    > 
                </Tab>     
              </Tabs>

             
              <Drawer
                anchor="right"
                open={showFilter}
                onClose={() => setShowFilter(false)}
                style={{ width: "30% !important" }}
                PaperProps={{
                  sx: { width: "60%" },
                  style: { width: "25%" },
                }}
              >
                <WebFilter
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  rangeSlider={rangeSlider}
                  rangeSliderChange={rangeSliderChange}
                  horizontalLabels={horizontalLabels}
                  collections={collections}
                />
              </Drawer>
            </div>
          )}
        </Slide>
       
      </Stack>
    </div>
  );
}

export default NFTCollectionSection;
