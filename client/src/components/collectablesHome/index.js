import React, { useState } from "react";
import { Col, Image, Row, Stack, Tab, Tabs } from "react-bootstrap";
import "./Styles.css";
import { FiFilter } from "react-icons/fi";
import useSound from "use-sound";
import buttonSound from "../../assets/audio/button.wav";
import NFTDetailsCards from "../nftdetails/NFTDetailsCards";
import NFTDetailsList from "../nftdetails/NFTDetailsList";
import Activity from "../activity";
import { Drawer } from "@mui/material";
import WebFilter from "../SmallComponents/WebFilter";
import Fade from "react-reveal/Fade";
import MobileFilterBtn from "../SmallComponents/MobileFilterBtn";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const image = require("../../assets/profile/coverpic.png");
const preimg = require("../../assets/nfts/1.png");

function CollectablesHome() {
  const [playSound] = useSound(buttonSound);
  const [showFilter, setShowFilter] = useState(false);
  const [rangeSlider, setRangeSlider] = useState(10);
  const { width } = useWindowDimensions();
  const rangeSliderChange = (value) => {
    setRangeSlider(value);
  };
  const horizontalLabels = {
    0: "0.01BLOQS",
    100: "100BLOQS",
  };
  return (
    <div className="metabloq_container">
      <Fade bottom>
        <div className="collections_home-wrapper">
          <div className="collections_home-banner">
            <Image fluid src={image} className="responsive-img" />
          </div>
          <div className="px-sm-3 h-100 collection_logo-preview d-flex align-items-end">
            <Image
              fluid
              src={preimg}
              alt="profile"
              height={width > 600 ? "200" : "150"}
              width={width > 600 ? "200" : "150"}
              style={{
                borderRadius: "1em",
                border: "5px solid white",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            />
            <div className="mx-3">
              <h2>Collection Name</h2>
              <span>created by ronney</span>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3">
            <Stack gap={width > 600 ? "5" : "2"} direction="horizontal">
              <div className="d-flex flex-column ">
                {width < 600 ? (
                  <>
                    <span className="fw-bold">9.4k</span>
                    <small>Items</small>
                  </>
                ) : (
                  <>
                    <h3 className="fw-bold">9.4k</h3>
                    <span>Items</span>
                  </>
                )}
              </div>
              <div className="d-flex flex-column ">
                {width < 600 ? (
                  <>
                    <span className="fw-bold">5.7k</span>
                    <small>Owners</small>
                  </>
                ) : (
                  <>
                    <h3 className="fw-bold">5.7k</h3>
                    <span>Owners</span>
                  </>
                )}
              </div>

              <div className="d-flex flex-column ">
                {width < 600 ? (
                  <>
                    <span className="fw-bold">8.9k</span>
                    <small>Total volume</small>
                  </>
                ) : (
                  <>
                    <h3 className="fw-bold">8.9k</h3>
                    <span>Total volume</span>
                  </>
                )}
              </div>
              <div className="d-flex flex-column">
                {width < 600 ? (
                  <>
                    <span className="fw-bold">1.85</span>
                    <small>Floor price</small>
                  </>
                ) : (
                  <>
                    <h3 className="fw-bold">1.85</h3>
                    <span>Floor price</span>
                  </>
                )}
              </div>
            </Stack>
          </div>
        </div>
      </Fade>
      <br />
      <h2>Portfolio Product</h2>
      {width < 600 ? (
        <>
          <MobileFilterBtn />
          <div className="nftdetails_cards-tabs">
            <Tabs
              defaultActiveKey="default"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="default" title="Items">
                <NFTDetailsList collectionhome="collectionhome" />
              </Tab>
              <Tab eventKey="Activity" title="Activity">
                <Activity />
              </Tab>
              {width > 600 ? (
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
                ></Tab>
              ) : null}
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
                collectionhome="collectionhome"
              />
            </Drawer>
          </div>
        </>
      ) : (
        <div className="ms-auto nftdetails_cards-tabs">
          <Tabs
            defaultActiveKey="default"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="default" title="Items">
              <NFTDetailsList collectionhome="collectionhome" />
            </Tab>
            <Tab eventKey="Activity" title="Activity">
              <Activity collectionhome="collectionhome"/>
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
            ></Tab>
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
              collectionhome="collectionhome"
            />
          </Drawer>
        </div>
      )}
    </div>
  );
}

export default CollectablesHome;
