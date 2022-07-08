import React from "react";
import { Col, Form, Image, Row, Stack } from "react-bootstrap";
import './Styles.css';
import {HiShoppingCart} from 'react-icons/hi';
import {BsTagFill} from 'react-icons/bs';
import {FaHandHolding} from 'react-icons/fa';
import {BsStars} from 'react-icons/bs';

const avatar1 = require('../../assets/nfts/1.png')
const avatar2 = require('../../assets/nfts/2.png')
const avatar3 = require('../../assets/nfts/3.png')
const avatar4 = require('../../assets/nfts/4.png')

const datas = [
  {
    id: 1,
    item_avatar: avatar1,
    item_name: "Faceless Souls",
    item_email:"Faceless Souls #1763",
    price: "1.5 XDC",
    dollar:"$2,683.73",
    quantity:1,
    from:'0x11..9088',
    to:"0x11..9011",
    time:"12 sec ago",
    icon_name:"Sale",
    icon:<HiShoppingCart size={20}/>
  },
  {
    id: 2,
    item_avatar: avatar2,
    item_name: "Wacky Monkeys Collection",
    item_email:"Monkey #572",
    price: "1.5 XDC",
    dollar:"$2,683.73",
    quantity:1,
    from:'0x11..2131',
    to:"0x11..8970",
    time:"12 sec ago",
    icon_name:"List",
    icon:<BsTagFill size={20}/>
  },
  {
    id: 3,
    item_avatar: avatar3,
    item_name: "SQL gods",
    item_email:"SQL gods 2337",
    price: "1.5 XDC",
    dollar:"$2,683.73",
    quantity:1,
    from:'0x51..9765',
    to:"0x11..6543",
    time:"12 sec ago",
    icon_name:"Offer",
    icon:<FaHandHolding size={24}/>
  },
  {
    id: 4,
    item_avatar: avatar4,
    item_name: "Faceless Souls",
    item_email:"Faceless Souls",
    price: "1.5 XDC",
    dollar:"$2,683.73",
    quantity:1,
    from:'0x31..9080',
    to:"0x11..1908",
    time:"12 sec ago",
    icon_name:"Minted",
    icon:<BsStars size={22}/>
  },
];

const days = [
  {id:1,days:"60 Days"},
  {id:2,days:"30 Days"},
  {id:3,days:"14 Days"},
  {id:4,days:"7 Days"},
  {id:5,days:"Today"}
]
function Activity() {
  return (
    <div className="metabloq_container mt-sm-5">
      <Stack gap={4}>
        <div className="d-flex justify-content-end ranking_select-input">
          <Stack direction="horizontal" gap={2}>
            <Form.Select aria-label="Default select example" className="ranking_input">
                    <option>Last 90 Days</option>
                    {
                      days.map((day)=>(
                        <option value={day.id}>Last {day.days}</option>
                      ))
                    }
              </Form.Select>
              </Stack>
        </div>
          <h1 className="text-center lufga-bold">Activity</h1> 
        <small className="secondary-text text-center w-100">
          Top NFTs on ARTZ, ranked by volume, Floor prize and others
        </small>

        <div className="ranking_table">
          <Row className="ranking_table-header lufga-bold d-flex justify-content-between align-items-center">
            <Col className="text-center"></Col>
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
                <Col >
                  <div className="d-flex justify-content-start align-items-center ml-4">
                    <small className="lufga-bold mx-1">{data.icon}</small>
                    <small className="lufga-bold mx-1">{data.icon_name}</small>
                  </div>
                </Col>
                <Col  className="text-left d-flex">
                  <Stack gap={2} direction="horizontal">
                    <Image fluid src={data.item_avatar} height={25} width={25} className="rounded_img"/>
                    <div className="d-flex flex-column">
                        <font size="1" >{data.item_name}</font>
                        <font size="1" className="lufga-bold">{data.item_email}</font>
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
