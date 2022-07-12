import React  from "react";
import { Row, Col, Stack, Image } from "react-bootstrap";
import { CollectionsData } from "../collections/CollectionsData";
import { AiTwotoneHeart } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const build1 = require('../../assets/category/build1.jpeg')
const build2 = require('../../assets/category/build2.jpeg')
const build3 = require('../../assets/category/build3.jpeg')
const build4 = require('../../assets/category/build4.jpeg')

function BuildingCollection(props) {
  let { building } = props;
  const navigate = useNavigate();
  const {width} =useWindowDimensions()
  return (
    <Stack gap={3}>
      <Row>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
            <Fade bottom>
              <div className="collections_cards metablog_cards"
              onClick={()=> navigate("collectionhome")}>
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={build1}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={build2}
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
                            src={build3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={build4}
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
                        Building Collection 1
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          samantha
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">480</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between poppins">
                      <small>Floor price</small>
                      <small className="fw-bold">1.85</small>
                </div>
                </Stack>
              </div>
            </Fade>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
            <Fade bottom>
              <div className="collections_cards metablog_cards"
              onClick={()=> navigate("collectionhome")}>
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={build3}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={build1}
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
                            src={build2}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={build4}
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
                        Building Collection 2
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          glenn
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">280</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between poppins">
                      <small>Floor price</small>
                      <small className="fw-bold">1.85</small>
                </div>
                </Stack>
              </div>
            </Fade>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
            <Fade bottom>
              <div className="collections_cards metablog_cards"
              onClick={()=> navigate("collectionhome")}>
                <Stack gap={2}>
                  <Row className="collections_cards-grid">
                    <Col>
                      <Row>
                        <Col style={{ padding: 5 }}>
           
                                <Image
                                style={{height: '100%', width: '100%', objectFit: 'cover'}}
                                fluid
                                src={build4}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={build2}
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
                            src={build3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={build1}
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
                        Building Collection 3
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          george
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">150</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between poppins">
                      <small>Floor price</small>
                      <small className="fw-bold">1.85</small>
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

export default BuildingCollection;