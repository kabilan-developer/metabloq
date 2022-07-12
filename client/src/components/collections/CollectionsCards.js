import React from 'react'
import { Row, Col, Stack, Image } from "react-bootstrap";
import { CollectionsData } from './CollectionsData';
import {AiTwotoneHeart} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

function CollectionsCards() {
    const navigate = useNavigate()
  return (
    <Row>
        {
            CollectionsData.slice(0,3).map((data)=>(
                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="mb-3">
                    <Fade bottom>
                    <div onClick={()=> navigate("collectionhome")} className='collections_cards metablog_cards' key={data.id}>
                        <Stack gap={2}>
                        <Row className='collections_cards-grid'>
                            <Col style={{padding:5}}>
                                <Image fluid src={data.grid_img1} alt="gridimg1" className="metabloq_img img-zoom-animation h-100"/>
                            </Col>
                            <Col >
                               
                                <Row>
                                    <Col style={{padding:5}}><Image fluid src={data.grid_img2} alt="gridimg1" className="metabloq_img img-zoom-animation"/></Col>
                                </Row>
                                <Row>
                                    <Col style={{padding:5}}><Image fluid src={data.grid_img3} alt="gridimg1" className="metabloq_img img-zoom-animation"/></Col>
                                    <Col style={{padding:5}}><Image fluid src={data.grid_img4} alt="gridimg1" className="metabloq_img img-zoom-animation"/></Col>
                                </Row>
                               
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-around align-items-center'>
                            <Image fluid src={data.avatar} height={35} width={35}/>
                            <div className='d-flex flex-column'>
                                <span className='font-weight-bold poppins'>{data.name}</span>
                                <small className='secondary-text poppins'>created by <small className="font-weight-bold text-dark">{data.sub_name}</small></small>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <AiTwotoneHeart/>
                                <span className='mx-1 poppins'>{data.likes}</span>
                            </div>
                        </div>
                        </Stack>
                    </div>
                    </Fade>
                </Col>
            ))
        }
    </Row>
  )
}

export default CollectionsCards