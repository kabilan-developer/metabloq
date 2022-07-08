import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectFailed } from "../../redux/WalletAction";
import "./Header.css";
import useWindowDimensions from "../../helpers/useWindowDimensions";
//other files
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import ConenctWallet from "../connectwallet/index.js";
import useSound from "use-sound";
import buttonSound from "../../assets/audio/button.wav";
import connectWallet from "../../assets/audio/connectWallet.mp3";
import { artAction, buildingAction, metapetsAction, miscellaneousAction, virtualrealestateAction, wearablesAction } from "../../redux/TabAction";

const metablog_logo = require("../../assets/metablog_logo.png");

const Header = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wallet = useSelector((state) => state.WalletConnect);
  console.log(wallet);
  const { width } = useWindowDimensions();

  const connect = () => {
    console.log("connect");
    setExpanded(false);
    setOpenWallet(true);
    walletConnectSound();
    // dispatch(connectWallet());
  };

  const errorDiv = () => {
    return <p>Wallet Disconnected!</p>;
  };
  const disconnect = () => {
    const { web3Modal } = wallet;
    web3Modal.clearCachedProvider();
    dispatch(connectFailed(errorDiv()));
    setExpanded(false);
    walletConnectSound();
  };
  const [playSound] = useSound(buttonSound);
  const [walletConnectSound] = useSound(connectWallet);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header_container"
        expanded={expanded}
      >
        <Container fluid>
          <Link className="nav-link" to={"/"}>
            <img height={50} src={metablog_logo} alt="metablog" />
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="header_collapse_navbar"
          >
            {width > 576 && (
              <Nav className="">
                <div className="header_search">
                  <FiSearch />{" "}
                  <input
                    className="header_search-input"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </Nav>
            )}

            <Nav className="ms-auto metabloq_header-menu">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
              <NavDropdown
                title={
                  <span>
                    New Items <RiArrowDownSLine color="#007bff" />{" "}
                  </span>
                }
                id="basic-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => {
                    setExpanded(false);
                    navigate("createcollection");
                  }}
                >
                  Collection
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("createnft");
                    setExpanded(false);
                  }}
                >
                  NFT
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    Collections <RiArrowDownSLine color="#007bff" />{" "}
                  </span>
                }
                id="basic-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(artAction());
                  }}
                >
                  Art
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(metapetsAction())
                  }}>
                  Meta Pets
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(virtualrealestateAction())
                  }}>
                  Virtual Real Estate
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(wearablesAction())
                  }}>
                  Wearables
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(buildingAction())
                  }}>
                  Buildings
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    setExpanded(false);
                    navigate("collections");
                    dispatch(miscellaneousAction())
                  }}>
                  Miscellaneous
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    Stats <RiArrowDownSLine color="#007bff" />{" "}
                  </span>
                }
                id="basic-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => {
                    setExpanded(false);
                    navigate("activity");
                  }}
                >
                  Activity
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setExpanded(false);
                    navigate("ranking");
                  }}
                >
                  Ranking
                </NavDropdown.Item>
              </NavDropdown>

              <Link
                className="nav-link"
                to={"#"}
                onClick={() => setExpanded(false)}
              >
                About Us
              </Link>
            </Nav>

            <Nav className="ms-auto">
              {/* for connect */}
              {!wallet.connected && width > 600 ? (
                <button
                  className="metablog_gradient-button mx-2"
                  onClick={connect}
                >
                  {" "}
                  <span>Connect Wallet</span>{" "}
                </button>
              ) : null}

              {width < 600 ? (
                !wallet.connected ? (
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ width: "50%" }}
                      className="metablog_gradient-button mb-3"
                      onClick={connect}
                    >
                      {" "}
                      <span>Connect Wallet</span>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-end">
                    <button
                      style={{ width: "60%" }}
                      className="metablog_gradient-button mb-3"
                      onClick={disconnect}
                    >
                      
                      {wallet.address.slice(0, 5) +
                        "..." +
                        wallet.address.slice(-5)}
                    </button>
                  </div>
                )
              ) : null}

              {/* for disconnect */}
              {wallet.connected && width > 600 ? (
                <button
                  className="metablog_gradient-button mx-2"
                  onClick={disconnect}
                >
                  {" "}
                 
                  {wallet.address.slice(0, 5) +
                    "..." +
                    wallet.address.slice(-5)}
                </button>
              ) : null}

              {width < 576 ? (
                <div className="d-flex justify-content-end">
                  <button
                    onClick={() => {
                      navigate("collectors");
                      setExpanded(false);
                      playSound();
                    }}
                    style={{ width: "40%" }}
                    className="metablog_primary-button"
                  >
                    <span>Log in</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    navigate("collectors");
                    setExpanded(false);
                    playSound();
                  }}
                  className="metablog_primary-button mx-2"
                >
                  {" "}
                  <span>Log in</span>
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ConenctWallet openWallet={openWallet} setOpenWallet={setOpenWallet} />
    </>
  );
};

export default Header;
