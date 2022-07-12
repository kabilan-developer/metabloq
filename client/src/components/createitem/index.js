import React, { useState } from "react";
import "./Styles.css";
import { Row, Col, Image, Stack, Form } from "react-bootstrap";
import useSound from "use-sound";
import buttonSound from "../../assets/audio/button.wav";
import { RiUploadCloudFill } from "react-icons/ri";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import Bounce from "react-reveal/Bounce";
import { AiFillStar, AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import PropertyModal from "./PropertyModal";
import LevelModal from "./LevelModal";
import StatsModal from "./StatsModal";

const time_icon = require("../../assets/auction/time_icon.png");
const avatar1 = require("../../assets/profilepics/face7.jpg");
const fixed = require("../../assets/createitem/fixed.png");
const timed_auction = require("../../assets/createitem/timed_auction.png");
const open_bids = require("../../assets/createitem/open_bids.svg");
const empty = require("../../assets/empty.png");

function CreateItem() {
  const [playSound] = useSound(buttonSound);
  const { width } = useWindowDimensions();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [uploadedImg, setUploadedImg] = useState(empty);
  const [propModal,setPropModal] = useState(false);
  const [levelModal,setLevelModal] = useState(false);
  const [statsModal,setStatsModal] = useState(false);

  const propModalClose = ()=>{
    setPropModal(false);
  }
  const levelModalClose = ()=>{
    setLevelModal(false);
  }
  const statsModalClose = ()=>{
    setStatsModal(false);
  }

  const getBase64 = (e) => {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUploadedImg(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  return (
    <div className="metabloq_container">
      <Row>
        <Col
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          className="h-100 mb-3"
        >
          <Bounce>
            <div className="bold">Preview Item</div>
            <div className="liveauction_cards metablog_cards h-100">
              <Stack gap={2}>
                <div className="d-flex justify-content-between">
                  <Image src={avatar1} height={20} width={20} alt="circle" />
                  <span className="mx-2">JimXVc</span>

                  <div className="ms-auto">
                    <span className="font-weight-bold">...</span>
                  </div>
                </div>
                <div className="liveauction_cards-imgwithtime my-2">
                  <div>
                    <Image
                      src={uploadedImg}
                      alt="square"
                      className="metabloq_img img-zoom-animation"
                      height={220}
                      width={220}
                    />
                  </div>
                  <div className="liveauction_cards-timebox d-flex justify-content-center align-items-center">
                    <Image
                      fluid
                      src={time_icon}
                      alt="time"
                      height={15}
                      width={15}
                    />
                    <small className="mx-2">02:15:10</small>
                  </div>
                </div>
                <div>
                  <div>{title ? title : "Abstract Nature"}</div>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col>
                    <font size="1">Current Bid</font>
                    <div
                      className="font-weight-bold"
                      style={{ color: "#1C83E5" }}
                    >
                      {price ? price : "5.1 BLOQS"}
                    </div>
                  </Col>
                  <Col
                    md="auto"
                    lg="auto"
                    xxl="auto"
                    xl="auto"
                    sm="auto"
                    xs="auto"
                  >
                    <button
                      onClick={() => playSound()}
                      className="metablog_primary-filled-square-button"
                    >
                      <small>Place Bid</small>
                    </button>
                  </Col>
                </Row>
              </Stack>
            </div>
          </Bounce>
        </Col>

        <Col xxl={9} xl={9} lg={9} md={9}>
          <Stack gap={4}>
            <Row>
              <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className="mb-3">
                <Bounce>
                  <Stack gap={4}>
                    <div>
                      <div className="bold">Title Name</div>
                      <input
                        type="text"
                        placeholder="eg.The Floating Pilot"
                        className="createitem_input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="bold">Price</div>
                      <input
                        type="text"
                        placeholder="Enter price for one item (BLOQS)"
                        className="createitem_input"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </Stack>
                </Bounce>
              </Col>

              <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className="mb-3">
                <Bounce>
                  <div className="p-4 createitem_uploadbox text-center h-100">
                    <small className="bold">Upload Files</small>
                    <br />
                    <small>JPG, PNG, GIF, WEBP, or MP4. MAX 200mb</small>
                    <br />
                    <label class="createitem_upload-button">
                      <RiUploadCloudFill color="white" /> <small>Upload</small>
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={getBase64}
                      />
                    </label>
                  </div>
                </Bounce>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: width < 600 && 5 }}>
                <Bounce>
                  <div className="createitem_select">
                    <div className="bold">Collection</div>
                    <Form.Select aria-label="Default select example">
                      <option style={{ fontSize: ".7em" }}>My Space</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Bounce>
              </Col>
              <Col style={{ padding: width < 600 && 5 }}>
                <Bounce>
                  <div className="createitem_select">
                    <div className="bold">Royalties</div>
                    <Form.Select aria-label="Default select example">
                      <option>5%</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Bounce>
              </Col>
            </Row>
            <Row>
            <Stack gap={4}>
              <Col sm={12} xs={12}>
                  
                <Bounce>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <AiOutlineUnorderedList />
                      <span className="bold mx-2">Properties</span>
                    </div>
                    <div onClick={()=>setPropModal(true)}className="add-items">
                        <AiOutlinePlus />
                    </div>
                  </div>
                </Bounce>
              </Col>
              <Col sm={12} xs={12}>
                <Bounce>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <AiFillStar />
                      <span className="bold mx-2">Levels</span>
                    </div>
                    <div onClick={()=>setLevelModal(true)} className="add-items">
                        <AiOutlinePlus/>
                    </div>
                  </div>
                </Bounce>
              </Col>
              <Col sm={12} xs={12}>
                <Bounce>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <IoIosStats />
                      <span className="bold mx-2">Stats</span>
                    </div>
                    <div onClick={()=>setStatsModal(true)} className="add-items">
                        <AiOutlinePlus/>
                    </div>
                  </div>
                </Bounce>
              </Col>
              </Stack>
            </Row>
            <Row>
              <Col>
                <Bounce>
                  <div>
                    <div className="bold">Description</div>
                    <textarea
                      type="textarea"
                      className="createitem_input"
                      placeholder="eg.Limited Outspace series"
                    />
                  </div>
                </Bounce>
              </Col>
            </Row>
            <Bounce>
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => playSound()}
                  className="metablog_primary-filled-button"
                >
                  <span>Create NFT</span>
                </button>
              </div>
            </Bounce>
          </Stack>
        </Col>
      </Row>
      <PropertyModal propModalClose={propModalClose} propModal={propModal} setPropModal={setPropModal}/>
      <LevelModal levelModal={levelModal} setLevelModal={setLevelModal} levelModalClose={levelModalClose}/>
      <StatsModal statsModal={statsModal} setStatsModal={setStatsModal} statsModalClose={statsModalClose}/>
    </div>
  );
}

export default CreateItem;
