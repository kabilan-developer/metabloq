import React from 'react'
import { Row, Stack,Col } from 'react-bootstrap'
import { BiMicrophone } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Form from 'react-bootstrap/Form';
import buttonSound from '../../assets/audio/button.wav'
import useSound from 'use-sound';


function WebFilter(props) {
    let {horizontalLabels,setShowFilter,rangeSliderChange,rangeSlider,setFilterDrawer,collections} = props;
    const [playSound] = useSound(buttonSound);

    const handleApplyClick = ()=>{
        if(setFilterDrawer){
            setFilterDrawer(false);
        }
        else if(setShowFilter){
            setShowFilter(false);
        }
        playSound();
    }
  return (
      <>
      {
          !collections ? 
    <div className="h-100 metabloq_webfilter-section">
    <Stack gap={3}>
        <div className='metabloq_webfilter-searchbox'>
            <FiSearch/>
            <input type="text" placeholder='Search item' className='webfilter_search-input'/>
            <BiMicrophone/>
        </div>
        <div className=''>
            <div>Type</div>
            <Row  className='nftcollection_filter-menu'>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Allitems</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">3-d</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Video</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Animation</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Photography</font>
            </Col>
            </Row>
        </div>
        <div className='webfilter_range'>
            <div>Price range</div>
            <div className='slider custom-labels'>
            <Slider
                min={0}
                max={100}
                value={rangeSlider}
                labels={horizontalLabels}
                onChange={rangeSliderChange}
                />
            </div>
        </div>
        <div className=''>
            <div>Creator</div>
            <div className=''>
                <Form.Select aria-label="Default select example">
                <option>Verified only</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </div>
        </div>
        <Row xxl={10} xl={10} lg={10} md={10}>
            <Col>
            <button className='nftcollection_mobile-category'>
            <font size="1">Reset All filter</font>
            </button>
            </Col>
        </Row>
        <button onClick={handleApplyClick} className="metablog_primary-filled-square-button">
        <small>Apply</small>
        </button> 
    </Stack>
</div> 
 : 
<div className="h-100 metabloq_webfilter-section">
    <Stack gap={3}>
        <div className='metabloq_webfilter-searchbox'>
            <FiSearch/>
            <input type="text" placeholder='Search item' className='webfilter_search-input'/>
            <BiMicrophone/>
        </div>
        <div className=''>
            <div>Type</div>
            <Row  className='nftcollection_filter-menu'>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Allitems</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Arts</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Buildings</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Wearables</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">VirtualRealEstate</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">MetaPets</font>
            </Col>
            <Col  onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Miscellaneous</font>
            </Col>
            </Row>
        </div>
        <div className='webfilter_range'>
            <div>Price range</div>
            <div className='slider custom-labels'>
            <Slider
                min={0}
                max={100}
                value={rangeSlider}
                labels={horizontalLabels}
                onChange={rangeSliderChange}
                />
            </div>
        </div>
        <div className=''>
            <div>Sort By</div>
            <Row >
            <Col onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Highest First</font>
            </Col>
            <Col onClick={() => playSound()} className='nftcollection_filter-div m-2'>
                <font size="2">Lowest First</font>
            </Col>
            </Row>
        </div>
        <Row xxl={10} xl={10} lg={10} md={10}>
            <Col>
            <button className='nftcollection_mobile-category'>
            <font size="1">Reset All filter</font>
            </button>
            </Col>
        </Row>
        <button onClick={handleApplyClick} className="metablog_primary-filled-square-button">
        <small>Apply</small>
        </button> 
    </Stack>
</div> 
}
</>
  )
}

export default WebFilter