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
import Fade from 'react-reveal/Fade'
import MobileFilterBtn from "../SmallComponents/MobileFilterBtn";
import useWindowDimensions from "../../helpers/useWindowDimensions";


const image = require("../../assets/profile/coverpic.png");
const preimg = require("../../assets/nfts/1.png");


function CollectablesHome() {
  const [playSound] = useSound(buttonSound);
  const [showFilter, setShowFilter] = useState(false);
  const [rangeSlider, setRangeSlider] = useState(10);
const {width} = useWindowDimensions()
  const rangeSliderChange = (value) => {
    setRangeSlider(value);
  };
  const horizontalLabels = {
    0: "0.01 XDC",
    100: "100 XDC",
  };
  return (
    <div className="metabloq_container">
      <Fade bottom>
      <div className="collections_home-wrapper">
        <div className="collections_home-banner">
          <img src={image} className="responsive-img" />
        </div>
        <Row>
          <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
          <div className="mb-sm-3 h-100">
          <Image
            fluid
            src={preimg}
            alt="profile"
            height={200}
            width={200}
            style={{
              borderRadius: "1em",
              border: "5px solid white",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          />
        </div>
          </Col>
          <Col xxl={9} xl={9} lg={9} md={9} sm={12} xs={12}>
          <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3">
            <Stack gap={5} direction="horizontal">
            <div className="d-flex flex-column ">
              <h3 className="fw-bold">9.4k</h3>
              <span>items</span>
            </div>
            <div className="d-flex flex-column ">
              <h3 className="fw-bold">5.7k</h3>
              <span>owners</span>
            </div>
            <div className="d-flex flex-column ">
              <h3 className="fw-bold">8.9k</h3>
              <span>total volume</span>
            </div>
            <div className="d-flex flex-column">
              <h3 className="fw-bold">1.85</h3>
              <span>floor price</span>
            </div>
            <div className="d-flex flex-column ">
              <h3 className="fw-bold">1.7</h3>
              <span>best offer</span>
            </div>
            </Stack>
        </div>
          </Col>
        </Row>
      </div>
      </Fade>
      <br />
      <h2>Portfolio Product</h2>
      <div className="ms-auto nftdetails_cards-tabs">
        <Tabs
          defaultActiveKey="default"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="default" title="All">
            <NFTDetailsList collectionhome="collectionhome"/>
          </Tab>
          <Tab eventKey="Activity" title="Activity">
            <Activity/>
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
                  collectionhome = "collectionhome"
                /> 
                
              </Drawer>
      </div>
    </div>
  );
}

export default CollectablesHome;
