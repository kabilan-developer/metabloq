import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Styles.css";
import { Form, Image, Stack } from "react-bootstrap";
import "./Styles.css";
import Divider from '@mui/material/Divider';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "none !important",
  boxShadow: 2,
  p: 2,
  borderRadius: "1em",
};

const bloqs = require('../../assets/logo_block.png')
function MakeOfferModal(props) {
  let { makeModalOpen, setMakeModalOpen, makeModalClose } = props;

  const makeOfferClick = () => {
    setMakeModalOpen(false);
  };

  const days = [
    { id: 1, days: "1 Day" },
    { id: 2, days: "3 Days" },
    { id: 4, days: "7 Days" },
    { id: 5, days: "1 month" },
  ];
  return (
    <>
      <Modal
        open={makeModalOpen}
        onClose={makeModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="placebid_modal-box">
            <Stack gap={3}>
              <div className=" d-flex justify-content-between align-items-center">
                <h3 className="font-weight-bold">Make an Offer</h3>
                <small onClick={makeModalClose} style={{ cursor: "pointer" }}>
                  X
                </small>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Price</span>
                <span>Balance 0.00</span>
              </div>
              <div className="d-flex makeoffer_input-holder">
                <span><Image src={bloqs} fluid  height={20} width={20}/> &nbsp;BLOQS</span>
                <Divider orientation="vertical" variant="middle" flexItem />
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="makeoffer_input"
                />
              </div>

              <div className="d-flex justify-content-start ranking_select-input">
                <Stack direction="horizontal" gap={2}>
                  <Form.Select
                    aria-label="Default select example"
                    className="ranking_input"
                  >
                    <option>Last 1 day</option>
                    {days.map((day) => (
                      <option value={day.id}>Last {day.days}</option>
                    ))}
                  </Form.Select>
                </Stack>
              </div>
              <div className="d-flex justify-content-center">
                  <span>Highest Bid 0</span>
              </div>
              <Stack gap={2}>
                <button
                  className="metablog_primary-filled-square-button"
                  onClick={makeOfferClick}
                >
                  <span>Make Offer</span>
                </button>
              </Stack>
            </Stack>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MakeOfferModal;
