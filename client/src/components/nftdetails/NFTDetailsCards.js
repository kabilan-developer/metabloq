import React, { useEffect, useState } from 'react'
import './Styles.css'
import { Col, Image, Row, Stack, Tab, Tabs } from 'react-bootstrap';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { NFTDetailsData } from './NFTDetailsData';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import join from '../../assets/audio/join.mp3';
import PlacebidModal from '../placebidModal';

const cardsPerPage = 4;
let arrayForHoldingCards = [];
const NFTDetailsList = ()=>{
    const [cardsToShow, setCardsToShow] = useState([]);
    const [next, setNext] = useState(4);
    const {width} = useWindowDimensions();


    const loopWithSlice = (start, end) => {
        const slicedCards = NFTDetailsData.slice(start, end);
        arrayForHoldingCards = [...arrayForHoldingCards, ...slicedCards];
        setCardsToShow(arrayForHoldingCards);
    };
    useEffect(() => {
        loopWithSlice(0, cardsPerPage);
      }, []);

      const handleShowMoreCards = () => {
        loopWithSlice(next, next + cardsPerPage);
        setNext(next + cardsPerPage);
        playSound()
      };
      const [playSound] = useSound(buttonSound)
      const [joinSound] = useSound(join)

      const [placeModalOpen, setPlaceModalOpen] = useState(false);

      const placeModalClose = () => {
        setPlaceModalOpen(false);
      };
      const placebidBtnClick  =()=>{
        setPlaceModalOpen(true)
        joinSound();
      }
    return (
        <>
        <Stack gap={3}>
        <Row>
            {
                cardsToShow.map((data)=>(
                    <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={6} className='mb-3'>
                        <Fade bottom>
                         <div className="liveauction_cards metablog_cards h-100" key={data.id}>
                            <Stack gap={2}>
                            <div className="liveauction_cards-imgwithtime my-2">
                                <Image fluid src={data.image} alt="square" className="metabloq_img img-zoom-animation"/>
                            </div>
                            <div className=''>
                                <div className='d-flex'>
                                {
                                width < 576 ? 
                                <h6>{data.name.slice(0, 12) + (data.name.length > 12 ? ".." : "")}</h6> :
                                <h6>{data.name.slice(0, 20) + (data.name.length > 20 ? ".." : "")}</h6>
                                }
                                <span className='ms-auto font-weight-bold'>...</span>
                                </div>
                                <div className='d-flex'>
                                <h6
                                className="font-weight-bold"
                                style={{ color: "#1C83E5" }}
                                >
                                {data.price} {data.chain}
                                </h6>
                                <font size="2" className='ms-auto secondary-text poppins'>{data.outoff}</font>
                                </div>
                            </div>
                            <button onClick={placebidBtnClick} className="metablog_primary-filled-square-button">
                                <small>Place Bid</small>
                            </button>
                            </Stack>
                        </div>
                        </Fade>
                    </Col>
                ))
            }
        </Row>
            <Zoom bottom duration={2000}>
            <div className='d-flex justify-content-center'>
                <button onClick={handleShowMoreCards} className='mr-2 nftcollection_mobile-category'>
                        <font size="2">Load More</font>
                </button>
            </div>
            </Zoom>
        </Stack>
        <PlacebidModal 
        placeModalOpen={placeModalOpen}
        setPlaceModalOpen={setPlaceModalOpen}
        placeModalClose={placeModalClose}
        joinSound={joinSound}/>
        </>
    )
}
function NFTDetailsCards({collectors}) {
    

  return (
    <>
    <div className='nftdetails_cards-menu '>
        {
            collectors ? 
        <h3 className='bold text-left'>
            Portfolio Product
        </h3> : 
        <h3 className='bold text-left'>
            Explore more
        </h3>
        }
        
        <div className='ms-auto nftdetails_cards-tabs'>
            <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="All" title="All">
                        <NFTDetailsList />
                    </Tab>
                    <Tab eventKey="Art" title="Art">
                        Art
                    </Tab>
                    <Tab eventKey="Music" title="Music">
                        Music
                    </Tab>
                    <Tab eventKey="Collectibles" title="Collectibles">
                        Collectibles
                    </Tab>
                </Tabs>
        </div>
    </div>
    </>
  )
}

export default NFTDetailsCards