import React from "react";
import { Row, Col, Stack, Image } from "react-bootstrap";
import { CollectionsData } from "../collections/CollectionsData";
import { AiTwotoneHeart } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const pets1 = require('../../assets/category/pets1.jpg')
const pets2 = require('../../assets/category/pets2.jpg')
const pets3 = require('../../assets/category/pets3.jpg')
const pets4 = require('../../assets/category/pets4.jpg')

function MetapetsCollection(props) {
  let { meta } = props;
  const navigate = useNavigate();
  const {width} =useWindowDimensions();
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
                                src={pets1}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={pets2}
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
                            src={pets3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={pets4}
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
                        Meta pets Collection 1
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          Rickey
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">410</span>
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
                                src={pets4}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={pets3}
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
                            src={pets2}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={pets1}
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
                        Meta pets Collection 2
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                            Maxwell
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">630</span>
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
                                src={pets1}
                                alt="gridimg1"
                                className="metabloq_img img-zoom-animation"
                            />
                
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>

                          <Image
                            fluid
                            src={pets2}
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
                            src={pets3}
                            alt="gridimg1"
                            className="metabloq_img img-zoom-animation"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ padding: 5 }}>
                          <Image
                            fluid
                            src={pets4}
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
                        Meta pets Collection 3
                      </span>
                      <small className="secondary-text poppins">
                        created by{" "}
                        <small className="font-weight-bold text-dark">
                          Joe Root
                        </small>
                      </small>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <AiTwotoneHeart />
                      <span className="mx-1 poppins">210</span>
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

export default MetapetsCollection;