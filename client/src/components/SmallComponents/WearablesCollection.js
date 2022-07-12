import React from "react";
import { Row, Col, Stack, Image } from "react-bootstrap";
import { CollectionsData } from "../collections/CollectionsData";
import { AiTwotoneHeart } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const wearables1 = require('../../assets/category/wearables1.jpg')
const wearables2 = require('../../assets/category/wearables2.jpg')
const wearables3 = require('../../assets/category/wearables3.jpg')
const wearables4 = require('../../assets/category/wearables4.jpg')

function WearablesCollection(props) {
  let { wear } = props;
  const navigate = useNavigate();
  const {width} = useWindowDimensions()
  return (
    <Stack gap={3}>
      <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3"
          onClick={()=> navigate("collectionhome")}>
            <Fade bottom>
              <div className="collections_cards metablog_cards">
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={wearables1}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={wearables2}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />
   
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables4}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold poppins">
                        Wearables Collection 1
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          Jim
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">780</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3 lufga">
                  <Stack gap={width > 600 ? "3" : "2"} direction="horizontal">
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">9.4k</small>
                      <small>items</small>
                    </div>
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">5.7k</small>
                      <small>owners</small>
                    </div>

                    <div className="d-flex flex-column ">
                      <small className="fw-bold">8.9k</small>
                      <small>total volume</small>
                    </div>
                    <div className="d-flex flex-column">
                      <small className="fw-bold">1.85</small>
                      <small>floor price</small>
                    </div>
                  </Stack>
                </div>
                </Stack>
              </div>
            </Fade>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3"
          onClick={()=> navigate("collectionhome")}>
            <Fade bottom>
              <div className="collections_cards metablog_cards">
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={wearables4}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={wearables3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />
   
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables2}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables1}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold poppins">
                        Wearables Collection 2
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          William
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">530</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3 lufga">
                  <Stack gap={width > 600 ? "3" : "2"} direction="horizontal">
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">9.4k</small>
                      <small>items</small>
                    </div>
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">5.7k</small>
                      <small>owners</small>
                    </div>

                    <div className="d-flex flex-column ">
                      <small className="fw-bold">8.9k</small>
                      <small>total volume</small>
                    </div>
                    <div className="d-flex flex-column">
                      <small className="fw-bold">1.85</small>
                      <small>floor price</small>
                    </div>
                  </Stack>
                </div>
                </Stack>
              </div>
            </Fade>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3"
          onClick={()=> navigate("collectionhome")}>
            <Fade bottom>
              <div className="collections_cards metablog_cards">
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={wearables4}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={wearables2}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />
   
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={wearables1}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="font-weight-bold poppins">
                        Wearables Collection 3
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                         Jhon
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">180</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3 lufga">
                  <Stack gap={width > 600 ? "3" : "2"} direction="horizontal">
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">9.4k</small>
                      <small>items</small>
                    </div>
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">5.7k</small>
                      <small>owners</small>
                    </div>

                    <div className="d-flex flex-column ">
                      <small className="fw-bold">8.9k</small>
                      <small>total volume</small>
                    </div>
                    <div className="d-flex flex-column">
                      <small className="fw-bold">1.85</small>
                      <small>floor price</small>
                    </div>
                  </Stack>
                </div>
                </Stack>
              </div>
            </Fade>
          </Col>
      </Row>
      <Zoom bottom duration={2000}>
        <div className="d-flex justify-content-center">
          <button
            className="mr-2 nftcollection_mobile-category"
          >
            <font size="2">Load More</font>
          </button>
        </div>
      </Zoom>
    </Stack>
  );
}

export default WearablesCollection;