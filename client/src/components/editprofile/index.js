import React from 'react'
import './Styles.css';
import {Row,Col,Stack, Image} from 'react-bootstrap';
import PersonalSection from './PersonalSection';
import ContactSection from './ContactSection';

const uploadimg = require('../../assets/profile/upload.png')
function EditProfile() {
  return (
    <div className='editprofile_container'>
        <Row>
            <h5>Profile Photo</h5>
            <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                
                <div className='editprofile_imgupload-box h-100'>
                    <div>
                    <Stack gap={2}>
                        <Image fluid src={uploadimg} alt="upload" height={80} width={80} className='mx-auto'/>
                        <h4 className='text-center'>Drag and drop <br/>files to upload</h4>
                        <h5 className='text-center'>OR</h5>
                        <button className='metablog_primary-filled-square-button'>
                            <font size="2">Browse</font>
                        </button>
                    </Stack>
                    </div>
                </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <PersonalSection/>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <ContactSection/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default EditProfile