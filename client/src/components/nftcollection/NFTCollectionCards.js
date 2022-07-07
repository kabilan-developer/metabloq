import React from 'react'
import { LiveAuctionData } from '../liveauctions/LiveAuctionData'
import {Row,Col,Stack,Image} from 'react-bootstrap'
import useWindowDimensions from '../../helpers/useWindowDimensions';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import join from '../../assets/audio/join.mp3';
import {useNavigate} from 'react-router-dom';

function NFTCollectionCards() {
  const {width} = useWindowDimensions();
  const [playSound] = useSound(join)
  const navigate = useNavigate();
  return (
    <>
        <Row>
        
        {LiveAuctionData.map((data) => (
          
          <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={6} className='mb-3'>
            <Fade bottom>
              <div onClick ={() => navigate(`${data.id}`)} className="liveauction_cards metablog_cards h-100" key={data.id}>
                <Stack gap={2}>
                  <div 
                  className="d-flex justify-content-between">
                     
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
                  <button onClick={() => playSound()} className="metablog_primary-filled-square-button">
                    <small>{data.button_name}</small>
                  </button>
                </Stack>
              </div>
              </Fade>
              </Col>
          ))}
        </Row>

    </>
  )
}

export default NFTCollectionCards