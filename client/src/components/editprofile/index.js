import React, { useState } from 'react'
import './Styles.css';
import {Row,Col,Stack, Image} from 'react-bootstrap';
import PersonalSection from './PersonalSection';
import ContactSection from './ContactSection';

const uploadimg = require('../../assets/profile/upload.png')
function EditProfile() {
    const [uploadedImg,setUploadedImg] = useState();

    const getBase64 = (e)=>{
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setUploadedImg(reader.result)
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }
  return (
    <div className='editprofile_container'>
        <Row>
            <h5>Profile Photo</h5>
            <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className='mb-3'>
                
                <div className='editprofile_imgupload-box h-100'>
                    {
                        !uploadedImg ? 
                        <div>
                        <Stack gap={2}>
                            <Image fluid src={uploadimg} alt="upload" height={80} width={80} className='mx-auto'/>
                            <h4 className='text-center'>Drag and drop <br/>files to upload</h4>
                            <h5 className='text-center'>OR</h5>
                            <label class="metablog_primary-filled-square-button" >
                                    <small>Browse</small>
                                    <input type="file" style={{display: 'none'}} onChange={getBase64}/>
                            </label>
                        </Stack>
                        </div> :
                        <Image fluid src={uploadedImg} alt="img" className='h-100'/>
                    }
                    
                </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} className='mb-3'>
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='mb-3'>
                        <PersonalSection/>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className='mb-3'>
                        <ContactSection/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default EditProfile