import React, { useState } from 'react'
import { Col, Image, Row, Stack, Tab, Tabs } from 'react-bootstrap'
import { AiFillEye, AiTwotoneHeart } from 'react-icons/ai'
import {MdOutlineSend} from 'react-icons/md'
import NFTDetailsCards from './NFTDetailsCards'
import './Styles.css'
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import join from '../../assets/audio/join.mp3';
import {useParams} from 'react-router-dom';
import PlacebidModal from '../placebidModal'
import BuynowModal from '../buynowModal'

const avatar1 = require('../../assets/profilepics/face7.jpg')
const avatar2 = require('../../assets/profilepics/face8.jpg')
const avatar3 = require('../../assets/profilepics/face9.jpg')
const avatar4 = require('../../assets/profilepics/face5.jpg')


function NFTDetails(props) {
    const { id } = useParams();
    let {LiveAuctionData} = props;
    const [playSound] = useSound(buttonSound)
    const [joinSound] = useSound(join)

const [placeModalOpen, setPlaceModalOpen] = useState(false);
const [buyModalOpen, setBuyModalOpen] = useState(false);

  const placeModalClose = () =>{
    setPlaceModalOpen(false);
  } 
  const buyModalClose = () =>{
    setBuyModalOpen(false);
  } 

  const placebidClick = ()=>{
    setPlaceModalOpen(true);
    joinSound();
  }
  const buyClick = ()=>{
    setBuyModalOpen(true);
    joinSound();
  }
  return (
    <div className='metabloq_container nftdetails_container'>
        <Stack gap={5}>
        <Row>
            {
                LiveAuctionData
                .filter((data) =>data.id == id)
                .map((data)=>(
                    <>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='mb-3' >
                <Fade bottom>
                    <div style={{overflow:'hidden',borderRadius:'1em'}}><Image fluid src={data.avatar} className="metabloq_img img-zoom-animation"/></div>
                </Fade>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <Fade bottom>
                <Stack gap={4}>
                <h1 className='font-weight-bold'>{data.name}</h1>
                <div className='d-flex justify-content-start'>
                    <div className="nftdetail-timebox d-flex justify-content-center align-items-center mr-3">
                        <Image
                            fluid
                            src={data.time_icon}
                            alt="time"
                            height={15}
                            width={15}
                            className='metabloq_img'
                        />
                        <small className="mx-2">{data.time}</small>
                    </div>
                    <div className="nftdetail-timebox d-flex justify-content-center align-items-center mr-3">
                         <AiFillEye color="#1C83E5"/>
                        <small className="mx-2">{data.view}</small>
                    </div>
                    <div className="nftdetail-timebox d-flex justify-content-center align-items-center mr-3">
                         <AiTwotoneHeart color="#1C83E5"/>
                        <small className="mx-2">{data.like}</small>
                    </div>
                </div>
                <div>
                    <div>Description</div>
                    <small className='secondary-text'>{data.description}</small>
                </div>
                <div className='d-flex'>
                    <Image src={data.icon} height={45} width={45} />
                    <div className='mx-3 d-flex flex-column'>
                        <span className='secondary-text'>Created by</span>
                        <span className='bold'>{data.createdby}</span>
                    </div>
                    <div className='mx-2 d-flex flex-column'>
                        <span className='secondary-text'>Collection</span>
                        <span className='bold'>{data.collection}</span>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <span>Price</span>
                    <span>{data.price} {data.chain} <span className='secondary-text'>{data.price_dollar}</span></span>
                </div>
                <div className='d-flex'>
                    <button onClick={placebidClick} className='mr-2 nftcollection_mobile-category'>
                        <span>Place a Bid</span>
                    </button>
                    <button onClick={buyClick} className='mx-2 metablog_primary-filled-square-button'>
                        <span>Buy Now</span>
                    </button>
                </div>
              
                <div className='nftdetails_tabs-small'>
                    <Tabs defaultActiveKey="Bid History" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Bid History" title="Bid History">
                            <Stack gap={3}>
                                <div className='d-flex'>
                                    <Image src={avatar1} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>Bid 0.093 XDC</span>
                                        <font size="2">by Harpreet at 3/10/2022, 10:15 AM</font>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Image src={avatar2} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>Bid 0.093 XDC</span>
                                        <font size="2">by Harpreet at 3/10/2022, 10:15 AM</font>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Image src={avatar3} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>Bid 0.093 XDC</span>
                                        <font size="2">by Harpreet at 3/10/2022, 10:15 AM</font>
                                    </div>
                                </div>
                            </Stack>
                        </Tab>
                        <Tab eventKey="Comments" title="Comments(3)" style={{height:'300px',overflowY:'scroll'}}>
                        <Stack gap={3}>
                                <div className='d-flex'>
                                    <Image src={avatar1} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>JimXVlc</span>
                                        <font size="2">I want to buy this NFTs</font>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Image src={avatar2} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>Bunny Bun</span>
                                        <font size="2">This is the best NFT market place</font>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <Image src={avatar4} height={45} width={45} />
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='bold'>Jordan Nico</span>
                                        <font size="2">Awesome features offered by the metabloq looking unique and execellent collections.</font>
                                    </div>
                                </div>
                                <div className='d-flex align-items-end'>
                                    <textarea type="text" placeholder='Enter your Comments' className='metabloq_comments-textarea'/>
                                    <span ><MdOutlineSend color=" #0295FA" size={25}/></span>
                                </div>
                                
                            </Stack>
                        </Tab>
                    </Tabs>
                </div>
                </Stack>
                </Fade>
            </Col>
            </>
                ))
            }
        </Row>
        <NFTDetailsCards nftdetailspage="nftdetailspage"/>
        </Stack>
        <PlacebidModal 
         placeModalOpen={placeModalOpen}
         setPlaceModalOpen={setPlaceModalOpen}
         placeModalClose = {placeModalClose}
         playSound={playSound}/>
         <BuynowModal 
         buyModalOpen={buyModalOpen}
         setBuyModalOpen={setBuyModalOpen}
         buyModalClose = {buyModalClose}
         playSound={playSound}
         />

    </div>
  )
}

export default NFTDetails