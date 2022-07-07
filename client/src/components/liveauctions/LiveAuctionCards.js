import React, { useState } from "react";
import { LiveAuctionData } from "./LiveAuctionData";
import { Image, Row, Stack } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "./Styles.css";
import { Pagination } from "swiper";
import useWindowDimensions from '../../helpers/useWindowDimensions';
import Bounce from 'react-reveal/Bounce';
import useSound from 'use-sound';
import join from '../../assets/audio/join.mp3';
import PlacebidModal from "../placebidModal";



function LiveAuctionCards() {
  const {width} = useWindowDimensions();
  const [playSound] = useSound(join);

  const [placeModalOpen, setPlaceModalOpen] = useState(false);

  const placeModalClose = () =>{
    setPlaceModalOpen(false);
  } 

  const onPlacebidClick = ()=>{
    playSound();
    setPlaceModalOpen(true);
  }
  return (
    <>
      <Row>
        <Swiper
          slidesPerView={width < 768 ? 2 : 4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="liveauction_myswiper "
        >
          {LiveAuctionData.map((data) => (
            <SwiperSlide>
              <Bounce top>
              <div className="liveauction_cards metablog_cards img-zoom-animation h-100" key={data.id}>
                <Stack gap={2}>
                  <div className="d-flex justify-content-between">
                    <Image
                     
                      src={data.icon}
                      height={20}
                      width={20}
                      alt="circle"
                      
                    />
                    {
                      width < 576 ? 
                      <span className="mx-2">{data.avatar_name.slice(0, 8) + (data.avatar_name.length > 8 ? ".." : "")}</span> :
                      <span className="mx-2">{data.avatar_name.slice(0, 15) + (data.avatar_name.length > 15 ? ".." : "")}</span>
                    }
                    
                    <div className="ms-auto">
                      <span className="font-weight-bold">...</span>
                    </div>
                  </div>
                  <div className="liveauction_cards-imgwithtime my-2">
                    <Image fluid src={data.avatar} alt="square" className="metabloq_img img-zoom-animation"/>
                    <div className="liveauction_cards-timebox d-flex justify-content-center align-items-center">
                      <Image
                        fluid
                        src={data.time_icon}
                        alt="time"
                        height={15}
                        width={15}
                      
                      
                      />
                      <small className="mx-2">{data.time}</small>
                    </div>
                  </div>
                  <div>
                    {
                      width < 576 ? 
                      <h6>{data.name.slice(0, 12) + (data.name.length > 12 ? ".." : "")}</h6> :
                      <h6>{data.name.slice(0, 20) + (data.name.length > 20 ? ".." : "")}</h6>
                    }
                    
                    <h6
                      className="font-weight-bold"
                      style={{ color: "#1C83E5" }}
                    >
                      {data.price} {data.chain}
                    </h6>
                  </div>
                  <button onClick={onPlacebidClick} className="metablog_primary-filled-square-button">
                    <small>Place Bid</small>
                  </button>

                </Stack>
              </div>
              </Bounce>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
      <PlacebidModal 
        placeModalOpen={placeModalOpen}
        setPlaceModalOpen={setPlaceModalOpen}
        placeModalClose = {placeModalClose}
        playSound={playSound}
      />
    </>
  );
}

export default LiveAuctionCards;
