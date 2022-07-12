import React from "react";
import { Row, Col, Stack, Image } from "react-bootstrap";
import { CollectionsData } from "../collections/CollectionsData";
import { AiTwotoneHeart } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const art1 = require("../../assets/category/art1.jpg");
const art2 = require("../../assets/category/art2.jpg");
const art3 = require("../../assets/category/art3.jpg");
const art4 = require("../../assets/category/art4.jpg");

function ArtCollection(props) {
  let { art } = props;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  return (
    <Stack gap={3}>
      <Row>
        <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
          <Fade bottom>
            <div
              className="collections_cards metablog_cards"
              onClick={() => navigate("collectionhome")}
            >
              <Stack gap={2}>
                <Row className="collections_cards-grid">
                  <Col>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          fluid
                          src={art1}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art2}
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
                          src={art3}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art4}
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
                      Art Collections 1
                    </span>
                    <small className="secondary-text poppins">
                      created by{" "}
                      <small className="font-weight-bold text-dark">
                        Ronney
                      </small>
                    </small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <AiTwotoneHeart />
                    <span className="mx-1 poppins">310</span>
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
        <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
          <Fade bottom>
            <div
              className="collections_cards metablog_cards"
              onClick={() => navigate("collectionhome")}
            >
              <Stack gap={2}>
                <Row className="collections_cards-grid">
                  <Col>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          fluid
                          src={art4}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art2}
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
                          src={art1}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art3}
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
                      Art Collections 2
                    </span>
                    <small className="secondary-text poppins">
                      created by{" "}
                      <small className="font-weight-bold text-dark">
                        brad
                      </small>
                    </small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <AiTwotoneHeart />
                    <span className="mx-1 poppins">310</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3 lufga">
                  <Stack gap={width > 600 ? "3" : "2"} direction="horizontal">
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">4.4k</small>
                      <small>items</small>
                    </div>
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">4.7k</small>
                      <small>owners</small>
                    </div>

                    <div className="d-flex flex-column ">
                      <small className="fw-bold">9.9k</small>
                      <small>total volume</small>
                    </div>
                    <div className="d-flex flex-column">
                      <small className="fw-bold">2.85</small>
                      <small>floor price</small>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </div>
          </Fade>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
          <Fade bottom>
            <div
              className="collections_cards metablog_cards"
              onClick={() => navigate("collectionhome")}
            >
              <Stack gap={2}>
                <Row className="collections_cards-grid">
                  <Col>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          fluid
                          src={art3}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art1}
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
                          src={art2}
                          alt="gridimg1"
                          className="metabloq_img img-zoom-animation"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ padding: 5 }}>
                        <Image
                          fluid
                          src={art4}
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
                      Art Collections 3
                    </span>
                    <small className="secondary-text poppins">
                      created by{" "}
                      <small className="font-weight-bold text-dark">
                        warner
                      </small>
                    </small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <AiTwotoneHeart />
                    <span className="mx-1 poppins">110</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center h-100 mb-sm-3 lufga">
                  <Stack gap={width > 600 ? "3" : "2"} direction="horizontal">
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">5.4k</small>
                      <small>items</small>
                    </div>
                    <div className="d-flex flex-column ">
                      <small className="fw-bold">2.7k</small>
                      <small>owners</small>
                    </div>

                    <div className="d-flex flex-column ">
                      <small className="fw-bold">6.9k</small>
                      <small>total volume</small>
                    </div>
                    <div className="d-flex flex-column">
                      <small className="fw-bold">7.85</small>
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
          <button className="mr-2 nftcollection_mobile-category">
            <font size="2">Load More</font>
          </button>
        </div>
      </Zoom>
    </Stack>
  );
}

export default ArtCollection;
