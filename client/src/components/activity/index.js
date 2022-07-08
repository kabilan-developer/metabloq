import React from "react";
import { Col, Form, Image, Row, Stack } from "react-bootstrap";
import './Styles.css';

const avatar1 = require('../../assets/profilepics/face4.jpg')
const avatar2 = require('../../assets/profilepics/face5.jpg')
const avatar3 = require('../../assets/profilepics/face6.jpg')
const avatar4 = require('../../assets/profilepics/face3.jpg')
const c_img = require('../../assets/c_img.png')

const datas = [
  {
    id: 1,
    item_avatar: c_img,
    item_name: "Bid place by @pawel09",
    item_date:"June 06, 2021",
    item_time:"12:00am",
    price: "1.5 ETH",
    dollar:"$2,683.73",
    quantity:1,
    from:'Woldo',
    to:"---",
    time:"12 sec ago",
  },
  {
    id: 2,
    item_avatar: c_img,
    item_name: "Bid place by @pawel09",
    item_date:"June 06, 2021",
    item_time:"12:00am",
    price: "1.5 ETH",
    dollar:"$2,683.73",
    quantity:1,
    from:'Woldo',
    to:"---",
    time:"12 sec ago",
  },
  {
    id: 3,
    item_avatar: c_img,
    item_name: "Bid place by @pawel09",
    item_date:"June 06, 2021",
    item_time:"12:00am",
    price: "1.5 ETH",
    dollar:"$2,683.73",
    quantity:1,
    from:'Woldo',
    to:"---",
    time:"12 sec ago",
  },
  {
    id: 4,
    item_avatar: c_img,
    item_name: "Bid place by @pawel09",
    item_date:"June 06, 2021",
    item_time:"12:00am",
    price: "1.5 ETH",
    dollar:"$2,683.73",
    quantity:1,
    from:'Woldo',
    to:"---",
    time:"12 sec ago",
  },
];

function Activity() {
  return (
    <div className="metabloq_container mt-sm-5">
      <Stack gap={4}>
        <h1 className="text-center lufga-bold">Activity</h1>
        <small className="secondary-text text-center w-100">
          Top NFTs on ARTZ, ranked by volume, Floor prize and others
        </small>

        <div className="ranking_table">
          <Row className="ranking_table-header lufga-bold d-flex justify-content-between align-items-center">
            <Col className="text-center">Items</Col>
            <Col className="text-center">Price</Col>
            <Col className="text-center">Quantity</Col>
            <Col className="text-center">From </Col>
            <Col className="text-center">To</Col>
            <Col className="text-center">Time</Col>
          </Row>
          <br />
          {datas.map((data) => (
            <>
              <Row className="ranking_table-body d-flex justify-content-between align-items-center">
                <Col xxl="auto" xl="auto" lg="auto" md="auto" className="text-center d-flex">
                  <Stack gap={2} direction="horizontal">
                    <small className="lufga-bold">{data.id}</small>
                    <Image fluid src={data.item_avatar} height={25} width={25} />
                    <div className="d-flex flex-column">
                        <font size="1" className="lufga-bold">{data.item_name}</font>
                        <font size="1">{data.item_date} at {data.item_time}</font>
                    </div>
                  </Stack>
                </Col>
                <Col className="text-center">
                    <div className="d-flex flex-column">
                        <small className="lufga-bold">{data.price}</small>
                        <font size="1">{data.dollar}</font>
                    </div>
                  
                </Col>
                <Col className="text-center">
                  <small>{data.quantity}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.from}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.to}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.time}</small>
                </Col>
              </Row>
              <hr style={{ backgroundColor: "gray" }} />
            </>
          ))}
        </div>
        <div className="d-flex justify-content-center">
            <button className="metablog_primary-filled-square-button py-1 px-5">
                <span>Show More</span>
            </button>
        </div>
        
      </Stack>
    </div>
  );
}

export default Activity;
