import React, { useState } from 'react'
import { Stack } from 'react-bootstrap';
import NFTCollectionCards from './NFTCollectionCards'
import './Styles.css';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import MobileFilterBtn from '../SmallComponents/MobileFilterBtn';
import {FiFilter} from 'react-icons/fi'
import Slide from 'react-reveal/Slide';
import useSound from 'use-sound';
import buttonSound from '../../assets/audio/button.wav';
import Drawer from "@mui/material/Drawer";
import WebFilter from '../SmallComponents/WebFilter';
import CollectorsCollectionCard from '../collectorsCollectionCards';



function NFTCollectionSection(props) {
    let {collections} = props;
    const {width} = useWindowDimensions();
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
    
    <div className='metabloq_container'>
        <Stack gap={4}>
        <Slide top>
        {
            width < 600 ?
            <MobileFilterBtn/>
            :         
            <div className='nftcollection_filter-menu d-flex raleway'>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>All items</small>
            </div>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>Art</small>
            </div>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>Virtual Real Estate</small>
            </div>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>Meta Pets</small>
            </div>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>Wearables</small>
            </div>
            <div onClick={() => playSound()} className='nftcollection_filter-div mx-2'>
                <small>Miscellaneous</small>
            </div>
            <div onClick={() => {
                setShowFilter(true);
                playSound();
            }} className='ms-auto nftcollection_filter-div-gradient'>
                <small className='d-flex align-items-center'>Filter & Sort <FiFilter/></small>
            </div>
            <Drawer 
                anchor="right" 
                open={showFilter} 
                onClose={() => setShowFilter(false)} 
                style={{ width : "30% !important"}}
                PaperProps={{
                    sx: { width: "60%" },
                    style:{width:'25%'}
                }}
                >
                <WebFilter 
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                    rangeSlider={rangeSlider}
                    rangeSliderChange={rangeSliderChange}
                    horizontalLabels={horizontalLabels}
                    />
         </Drawer>
        </div>
            
        }
        </Slide>
        {
            collections ? 
            <CollectorsCollectionCard collections="collections"/> : <NFTCollectionCards/>
        }
        
        </Stack>
    </div>
    
  )
}

export default NFTCollectionSection