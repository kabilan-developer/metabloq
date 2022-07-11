import React, { useState } from 'react';
import './Styles.css';
import {Row,Col, Image, Stack, Form} from 'react-bootstrap';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import {RiUploadCloudFill} from 'react-icons/ri';
import Bounce from 'react-reveal/Bounce';
import { AiTwotoneHeart } from 'react-icons/ai';


const empty = require('../../assets/empty.png')

function CreateCollection() {
    const [playSound] = useSound(buttonSound)
    const [title,setTitle] = useState('')
    const [bannerImg,setBannerImg] = useState(empty);
    const [featuredImg,setFeaturedImg] = useState(empty);

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
                <div className='bold'>Preview Item</div>
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
                <div className="font-weight-bold">{title ? title : "Cute Things"}</div>
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
                            <div className='bold'>Title Name</div>
                            <input type="text" placeholder='eg.The Floating Pilot' className='createitem_input'
                            value={title} onChange={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className='bold'>Blockchain</div>
                            <input type="text" placeholder='XDC' className='createitem_input'/>
                        </div>
                        </Stack>
                    </Bounce>
                    </Col>

                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                    <Bounce>
                        <Stack gap={4} >
                            <div className='createitem_select'>
                                <div className='bold'>Category</div>
                                <Form.Select aria-label="Default select example">
                                    <option>My Space</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className='createitem_select'>
                            <div className='bold'>Royalties</div>
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
                            <div className='bold'>Description</div>
                            <textarea type="textarea" className="createitem_input" placeholder="eg.Limited Outspace series"/>
                        </div>
                    </Bounce>
                    </Col>
                </Row>

                <Row>
                    <Col xxl={6} xl={6} lg={6} sm={12} xs={12} className='mb-3'>
                        <div className='bold'>Logo Image</div>
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
                        <div className='bold'>Featured Image</div>
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
                        <div className='bold'>Banner Image</div>
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