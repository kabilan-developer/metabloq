import React,{useEffect, useState} from 'react'
import './Styles.css'
import {Col, Image, Row, Stack} from 'react-bootstrap';
import {AiTwotoneCopy} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import { conditionActionEdit } from '../../redux/condition/conditionAction';


const coverpic = require('../../assets/profile/coverpic.png')
const profilepic = require('../../assets/profile/profilepic.png')

function CollectorsProfile() {
    const [playSound] = useSound(buttonSound)
    const navigate = useNavigate()
    const [copySuccess,setCopySuccess] = useState(null);
    const [showElement,setShowElement] = useState(false);
    const wallet = useSelector((state) => state.WalletConnect);

    useEffect(()=>{
        setTimeout(function() {
          setShowElement(false)
             }, 3000);
           },[showElement])

    const copytoclipboard = ()=>{
        navigator.clipboard.writeText(wallet.address);
        setCopySuccess("Copied!");
        setShowElement(true);
    }

    const editProfileClick = ()=>{
        playSound();
        navigate("editprofile");
    }
  return (
    <Fade >
    <div className='collectors_profile h-100'>
        <div className='h-25'>
            <Image src={coverpic} fluid alt="collector profile" className='metabloq_img' style={{borderRadius:'1em 1em 0 0'}}/>
        </div>
        <Row className='h-75 d-flex collectors_profile-imgdiv'>
            <Col xxl={10} xl={10} lg={10} md={10} sm={12} xs={12} className='d-flex mb-3'>
                <div className=''>
                    <Image src={profilepic} fluid alt="profile" style={{borderRadius:'1em'}} height={200} width={200}/>
                </div>
                <div className='mx-3 d-flex align-items-center'>
                    <div>
                    <Stack gap={1}>
                        <h2>Tony Stark <font size="2" className='secondary-text'>(@hitstony)</font></h2> 
                        <span>www.iamironman.com</span>
                        {
                            wallet.connected && 
                            <div className='collectors_profile-walletbox'>
                            <small>{wallet.address.slice(0, 5) + "..." + wallet.address.slice(-5)}</small>
                            {" "}<small onClick={copytoclipboard}><AiTwotoneCopy size={18}/></small>
                            </div>
                        }
                        {
                            showElement && copySuccess ? <small className='text-success text-center'>{copySuccess}</small> : null
                        }
                    </Stack>
                    </div>
                </div>     
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12} className=''>
                <div className='h-100 d-flex flex-column justify-content-around'>
                    <div className='collectors-social-icons-div d-flex justify-sm-content-end align-items-start'>
                        <span className='collectors-social-icons'><BsInstagram color="white" /></span>
                        <span className='collectors-social-icons'><BsTwitter color="white" /></span>
                        <span className='collectors-social-icons'><FaFacebookF color="white" /></span>
                        <span className='collectors-social-icons'><FaTelegramPlane color="white" /></span>
                    </div>
                    <button className='metablog_gradient-button' onClick={editProfileClick}>
                        <span>Edit Profile</span>
                    </button>
                </div>
            </Col>
        </Row>
    </div>
    </Fade>
  )
}

export default CollectorsProfile