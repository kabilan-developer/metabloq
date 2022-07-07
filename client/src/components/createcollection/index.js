import React, { useState } from 'react';
import './Styles.css';
import {Row,Col, Image, Stack, Form} from 'react-bootstrap';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import {RiUploadCloudFill} from 'react-icons/ri';
import useWindowDimensions from '../../helpers/useWindowDimensions'
import Bounce from 'react-reveal/Bounce';
import { AiTwotoneHeart } from 'react-icons/ai';


const nft2 = require('../../assets/nfts/8.png')
const img3 = require('../../assets/collectables/collectables2.png');
const avatar1 = require('../../assets/profilepics/face4.jpg')

function CreateCollection() {
    const [playSound] = useSound(buttonSound)
    const {width} = useWindowDimensions()
    const [title,setTitle] = useState('')
    const [bannerImg,setBannerImg] = useState(img3);
    const [featuredImg,setFeaturedImg] = useState(avatar1);

    const bannerImageChange = (e)=>{
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setBannerImg(reader.result)
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }
    const featuredImageChange = (e)=>{
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setFeaturedImg(reader.result)
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }
    const getBase64 = (e)=>{
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setBannerImg(reader.result)
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }
  return (
    <div className='metabloq_container-fluid'>
        <Row>
            <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12} className="h-100 mb-3" >
            <Bounce>
                <h6 className='bold'>Preview Item</h6>
                <div className="collectables_cards metablog_cards">
            <Stack gap={2}>
              <div className="collectables_cards-imgsection">
                <Image fluid src={bannerImg} alt="collectables" className="metabloq_img img-zoom-animation"/>
                <div className="collectables_cards-likesbox d-flex justify-content-center align-items-center">
                  <span>
                    <AiTwotoneHeart color="white" size={18}/>
                  </span>
                  <span className="mx-1">150</span>
                </div>
                <div className="collectables_cards-avatarbox">
                  <Image fluid src={featuredImg} height={45}  className="metabloq_img" />
                </div>
              </div>
              <br/>
              <div className="text-center">
                <h6 className="font-weight-bold">{title ? title : "Cute Things"}</h6>
                <small className="secondary-text">
                  Created by <small className="font-weight-bold text-dark">Sera Cobalt</small>
                </small>
              </div>
            </Stack>
          </div>
        </Bounce>
            </Col>

            <Col xxl={9} xl={9} lg={9} md={9} >
                <Stack gap={4}>
                <Row>
                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                    <Bounce>
                        <Stack gap={4} >
                        <div>
                            <h6 className='bold'>Title Name</h6>
                            <input type="text" placeholder='eg.The Floating Pilot' className='createitem_input'
                            value={title} onChange={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6 className='bold'>Blockchain</h6>
                            <input type="text" placeholder='XDC' className='createitem_input'/>
                        </div>
                        </Stack>
                    </Bounce>
                    </Col>

                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                    <Bounce>
                        <Stack gap={4} >
                            <div className='createitem_select'>
                                <h6 className='bold'>Category</h6>
                                <Form.Select aria-label="Default select example">
                                    <option>My Space</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className='createitem_select'>
                            <h6 className='bold'>Royalties</h6>
                            <Form.Select aria-label="Default select example">
                                <option>5%</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </div>
                        </Stack>
                    </Bounce>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Bounce>
                        <div>
                            <h6 className='bold'>Description</h6>
                            <textarea type="textarea" className="createitem_input" placeholder="eg.Limited Outspace series"/>
                        </div>
                    </Bounce>
                    </Col>
                </Row>

                <Row>
                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                        <h6 className='bold'>Logo Image</h6>
                    <Bounce>
                        <div className="p-4 createitem_uploadbox text-center h-100">
                                <small className='bold'>Upload Files</small><br/>
                                <small>JPG, PNG, GIF, WEBP, or MP4. MAX 200mb</small><br/>
                                <label class="createitem_upload-button" >
                                    <RiUploadCloudFill color="white"/> <small>Upload</small> 
                                    <input type="file" style={{display: 'none'}} onChange={getBase64}/>
                                </label>
                        </div>
                    </Bounce>
                    </Col>

                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                        <h6 className='bold'>Featured Image</h6>
                    <Bounce>
                    <div className="p-4 createitem_uploadbox text-center h-100">
                                <small className='bold'>Upload Files</small><br/>
                                <small>JPG, PNG, GIF, WEBP, or MP4. MAX 200mb</small><br/>
                                <label class="createitem_upload-button" >
                                    <RiUploadCloudFill color="white"/> <small>Upload</small> 
                                    <input type="file" style={{display: 'none'}} onChange={featuredImageChange}/>
                                </label>
                        </div>
                    </Bounce>
                    </Col>
                </Row>

                <Row>
                    <Col xxl={12} xl={12} lg={12} sm={12} xs={12} className='mb-3'>
                        <h6 className='bold'>Banner Image</h6>
                    <Bounce>
                        <div className="p-4 createitem_uploadbox text-center h-100">
                            <small className='bold'>Upload Files</small><br/>
                            <small>JPG, PNG, GIF, WEBP, or MP4. MAX 200mb</small><br/>
                            <label class="createitem_upload-button" >
                                <RiUploadCloudFill color="white"/> <small>Upload</small> 
                                <input type="file" style={{display: 'none'}} onChange={bannerImageChange}/>
                            </label>
                        </div>
                    </Bounce>
                    </Col>
                </Row>

            
                <Bounce>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => playSound()} className='metablog_primary-filled-button'>
                        <span>Create Collection</span>
                    </button>
                </div>
                </Bounce>

                </Stack>
            </Col>
        </Row>
    </div>
  )
}

export default CreateCollection