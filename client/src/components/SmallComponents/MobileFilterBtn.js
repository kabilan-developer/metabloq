import React,{useState} from "react";
import "./Styles.css";
import { Col, Row, Stack } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import Drawer from "@mui/material/Drawer";
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav'
import WebFilter from "./WebFilter";

function MobileFilterBtn(props) {
    let {collections} = props;
    const [filterDrawer, setFilterDrawer] = useState(false);
    const [categoryDrawer, setCategoryDrawer] = useState(false);
    const [playSound] = useSound(buttonSound);
    const [showFilter, setShowFilter] = useState(false);
    const [rangeSlider,setRangeSlider] = useState(10)

    const rangeSliderChange = (value) => {
        setRangeSlider(value)
    }; 
    const horizontalLabels = {
        0: '0.01 XDC',
        100: '100 XDC'
      }
  return (
    <>
      <Row className="mt-1">
        <Col >
          <div onClick={() => {
            setCategoryDrawer(true)
            playSound();
          } } 
          className="nftcollection_mobile-category d-flex justify-content-center align-items-center"
          >
            <small className='d-flex align-items-center'>Category <BiCategory/></small>
          </div>
          <Drawer open={categoryDrawer} onClose={() => setCategoryDrawer(false)} PaperProps={{
                    sx: { width: "60%" },}}
          >
                <div className="mobileview_category-drawer h-100">
                    <h3>Category</h3>
                    <Stack gap={3}>
                    <div className='m-1'>
                    <input type="checkbox"/>
                    <span className="mx-2">All items</span>
                    </div>
                    <div className='m-1'>
                    <input type="checkbox"/>
                        <span className="mx-2">Art</span>
                    </div>
                    <div className='m-1'>
                    <input type="checkbox"/>
                        <span className="mx-2">Virtual Real Estate</span>
                    </div>
                    <div className='m-1'>
                    <input type="checkbox"/>
                        <span className="mx-2">Meta Pets</span>
                    </div>
                    <div className='m-1'>
                    <input type="checkbox"/>
                        <span className="mx-2">Wearables</span>
                    </div>
                    <div className='m-1'>
                    <input type="checkbox"/>
                        <span className="mx-2">Miscellaneous</span>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                    <button onClick={()=> {
                      setCategoryDrawer(false)
                      playSound()
                    } } className="metablog_primary-filled-square-button">
                        <small>Apply</small>
                    </button>
                    </div>
                    </Stack>
                </div> 
         </Drawer>
        </Col>
        <Col>
          <div onClick={() => { 
            setFilterDrawer(true)
            playSound()
          }} 
          className="nftcollection_mobile-category d-flex justify-content-center align-items-center">
            <small className='d-flex align-items-center'>Filter & Sort {""}<FiFilter/></small>
          </div>
          <Drawer open={filterDrawer} onClose={() => setFilterDrawer(false)} PaperProps={{
                    sx: { width: "70%" },}}> 
                <WebFilter 
                  collections={collections}
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  rangeSlider={rangeSlider}
                  rangeSliderChange={rangeSliderChange}
                  horizontalLabels={horizontalLabels}
                  setFilterDrawer={setFilterDrawer}
                />
         </Drawer>
          
        </Col>
      </Row>
    </>
  );
}

export default MobileFilterBtn;
