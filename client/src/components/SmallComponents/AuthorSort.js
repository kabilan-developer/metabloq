import React from 'react'
import { Col, Image, Row, Stack } from 'react-bootstrap';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import Fade from 'react-reveal/Fade';
import { LiveAuctionData } from '../../components/liveauctions/LiveAuctionData';
import useSound from 'use-sound';
import join from '../../assets/audio/join.mp3';
import PlacebidModal from '../placebidModal';
import { useNavigate } from 'react-router-dom';

const AuthorSort = (props)=>{
    let {setPlaceModalOpen} = props;
    const navigate = useNavigate()
    const AuthorSort = [...LiveAuctionData].sort((a, b) => a.avatar_name > b.avatar_name ? 1 : -1);
    const {width} = useWindowDimensions();
    const [joinSound] = useSound(join)

    const placebidBtnClick = ()=>{
        joinSound()
        setPlaceModalOpen(true);
    }
    return (
        <>
        <Stack gap={3}>
        <Row>
            {
                AuthorSort.map((data)=>(
                    <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={6} className='mb-3'>
                        <Fade bottom>
                         <div className="liveauction_cards metablog_cards h-100" key={data.id}>
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
                                <Image fluid src={data.avatar} alt="square" className="metabloq_img img-zoom-animation"
                                 onClick={() => navigate(`${data.id}`)}/>
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
                            </div>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col>  
                                    <font size="1">Current Bid</font>                               
                                    <h6
                                    className="font-weight-bold"
                                    style={{ color: "#1C83E5" }}>
                                    {data.price} {data.chain}
                                    </h6>
                                </Col>
                                <Col md="auto" lg="auto" xxl="auto" xl="auto">
                                <button onClick={placebidBtnClick} className="metablog_primary-filled-square-button">
                                    <small>{data.button_name}</small>
                                </button>
                                </Col>
                            </Row>
                            </Stack>
                        </div>
                        </Fade>
                    </Col>
                ))
            }
        </Row>
        </Stack>
        <PlacebidModal {...props} joinSound={joinSound}/>
        </>
    )
}
export default AuthorSort;