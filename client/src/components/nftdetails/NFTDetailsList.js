import React, { useEffect, useState } from 'react'
import './Styles.css'
import { Col, Image, Row, Stack } from 'react-bootstrap';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import join from '../../assets/audio/join.mp3';
import { useNavigate } from 'react-router-dom';
import { LiveAuctionData } from '../liveauctions/LiveAuctionData';
import Modalbox from '../modalbox/Modalbox';

const cardsPerPage = 4;
let arrayForHoldingCards = [];
const NFTDetailsList = (props)=>{

    let {nftdetailspage,collectionhome} = props;
    const [cardsToShow, setCardsToShow] = useState([]);
    const [next, setNext] = useState(4);
    const {width} = useWindowDimensions();
    const navigate = useNavigate()

    const loopWithSlice = (start, end) => {
        const slicedCards = LiveAuctionData.slice(start, end);
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

      //for puton sale modal
      const [show,setShow] = useState(false);
      const [nftsImg,setNftsImg] = useState('')
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
                                <Image fluid src={data.avatar} alt="square" className="metabloq_img img-zoom-animation"
                                onClick={() => navigate(`${data.id}`)}/>
                            </div>
                            <div className=''>
                                <div className='d-flex'>
                                {
                                width < 576 ? 
                                <div>{data.avatar_name.slice(0, 12) + (data.avatar_name.length > 12 ? ".." : "")}</div> :
                                <div>{data.avatar_name.slice(0, 20) + (data.avatar_name.length > 20 ? ".." : "")}</div>
                                }
                                <span className='ms-auto font-weight-bold'>...</span>
                                </div>
                                <div className='d-flex'>
                                <div
                                className="font-weight-bold"
                                style={{ color: "#1C83E5" }}
                                >
                                {data.price} {data.chain}
                                </div>
                                <font size="2" className='ms-auto secondary-text poppins'>{data.outoff}</font>
                                </div>
                            </div>
                            { !collectionhome ? (
                                data.button_name2 === "Place a Bid" ?
                                <button onClick={()=>{
                                    setShow(true)
                                    joinSound()
                                    setNftsImg(data.avatar)
                                }}
                                 className="metablog_gradient-button">
                                {nftdetailspage ? 
                                <small>{data.button_name2}</small> :
                                <small>{data.profile_button}</small>}
                                </button> : 
                                 null

                                || data.button_name2 === "Make Offer" ? 
                                <button onClick={()=>{
                                    setShow(true)
                                    joinSound()
                                    setNftsImg(data.avatar)
                                }}
                                 className="metablog_gradient-button">
                                {nftdetailspage ? 
                                <small>{data.button_name2}</small> :
                                <small>{data.profile_button}</small>}
                                </button> : 
                                  null
  
                                || data.button_name2 === "Buy" ? 
                                <button onClick={()=>{
                                    setShow(true)
                                    joinSound()
                                    setNftsImg(data.avatar)
                                }}
                                 className="metablog_primary-filled-button">
                                {nftdetailspage ? 
                                <small>{data.button_name2}</small> :
                                <small>{data.profile_button}</small>}
                                </button> : 
                                  null
  
                                || data.button_name2 === "Put On Sale" ?
                                <button onClick={()=>{
                                    setShow(true)
                                    joinSound()
                                    setNftsImg(data.avatar)
                                }}
                                 className="metablog_gradient-filled-button">
                                {nftdetailspage ? 
                                <small>{data.button_name2}</small> :
                                <small>{data.profile_button}</small>}
                                </button> : 
                                 null
  
                                || data.button_name2 === "On Sale" ? 
                                <button onClick={()=>{
                                    setShow(true)
                                    joinSound()
                                    setNftsImg(data.avatar)
                                }}
                                 className="metablog_primary-button">
                                {nftdetailspage ? 
                                <small>{data.button_name2}</small> :
                                <small>{data.profile_button}</small>}
                                </button> : 
                                  null) :
                                  <button onClick={()=>{ setShow(true); joinSound()}}
                                  className="metablog_primary-filled-square-button">
                                 <small>{data.button_name}</small>
                                 </button>
 
                            }
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
        <Modalbox show={show} setShow={setShow} nftsImg={nftsImg}/>
        </>
    )
}
export default NFTDetailsList;