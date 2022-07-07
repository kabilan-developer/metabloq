import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Styles.css";
import { Stack } from "react-bootstrap";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: 'none !important',
    boxShadow: 2,
    p: 2,
    borderRadius:'1em'
  };
  
function PlacebidModal(props) {
  let { placeModalOpen, setPlaceModalOpen,placeModalClose,playSound,joinSound } = props;

  const placebidClick = ()=>{
    setPlaceModalOpen(false)
    if(joinSound){
        joinSound()
    }else{
        playSound()
    }
  }
  return (
    <>
      <Modal
        open={placeModalOpen}
        onClose={placeModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="placebid_modal-box">
            <Stack gap={3}>
                <div className=" d-flex justify-content-between align-items-center">
                  <h3 className="font-weight-bold">Place a bid</h3>
                  <small onClick={placeModalClose} style={{cursor:'pointer'}}>X</small>
                </div>
                <small>You must bid at least 0.825 ETH</small>
              <div>
                <Stack gap={1}>
                  <small className="font-weight-bold">Your bid</small>
                  <div className=" d-flex justify-content-between align-items-center">
                    <small>Enter bid</small> <small className="font-weight-bold">ETH</small>
                  </div>
                  <div className=" d-flex justify-content-between align-items-center">
                    <small>Your balance</small> <small className="font-weight-bold">4.568 ETH</small>
                  </div>
                  <div className=" d-flex justify-content-between align-items-center">
                    <small>Service fee</small> <small className="font-weight-bold">0.001 ETH</small>
                  </div>
                  <div className=" d-flex justify-content-between align-items-center">
                    <small>Total</small> <small className="font-weight-bold">0.001 ETH</small>
                  </div>
                </Stack>
              </div>
              <Stack gap={2}>
                <button
                  className="metablog_primary-filled-square-button"
                  onClick={placebidClick}
                >
                  <span>Place a bid</span>
                </button>
                <button
                  className="metablog_gradient-square-button"
                  onClick={placeModalClose}
                >
                  <span>Cancel</span>
                </button>
              </Stack>
            </Stack>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default PlacebidModal;
