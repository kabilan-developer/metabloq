import React from "react";
import { Col, Form, Image, Row, Stack } from "react-bootstrap";
import './Styles.css';

const avatar1 = require('../../assets/nfts/1.png')
const avatar2 = require('../../assets/nfts/2.png')
const avatar3 = require('../../assets/nfts/3.png')


const datas = [
  {
    id: 1,
    avatar: avatar1,
    name: "LastChains",
    volume: "13734.88 BLOQS",
    percentage: "+23.54%",
    price: "1.324 BLOQS",
    asset: "12",
    owner: "0x11..9088",
    color:'green',
  },
  {
    id: 2,
    avatar: avatar2,
    name: "LastChains",
    volume: "13734.88 BLOQS",
    percentage: "-2.54%",
    price: "1.324 BLOQS",
    asset: "54",
    owner: "0x11..9438",
    color:'red'
  },
  {
    id: 3,
    avatar: avatar3,
    name: "LastChains",
    volume: "13734.88 BLOQS",
    percentage: "+25.14%",
    price: "1.324 BLOQS",
    asset: "76",
    owner: "0x11..4086",
    color:'green'
  },
];

const days = [
  {id:1,days:"60 Days"},
  {id:2,days:"30 Days"},
  {id:3,days:"14 Days"},
  {id:4,days:"7 Days"},
  {id:5,days:"Today"}
]

function Ranking() {
  return (
    <div className="metabloq_container mt-sm-5">
      <Stack gap={4}>
        <h1 className="lufga-bold text-center">Top Collections</h1>
        <small className="secondary-text text-center w-100">
          Top NFTs on ARTZ, ranked by volume, Floor prize and others
        </small>
        <div className="d-flex justify-content-center ranking_select-input">
          <Stack gap={3} direction="horizontal">
            <Form.Select
              aria-label="Default select example"
              className="ranking_input"
            > <option>Last 7 Days</option>
            {
              days.map((day)=>(
                <option value={day.id}>Last {day.days}</option>
              ))
            }
            </Form.Select>
            {/* <Form.Select
              aria-label="Default select example"
              className="ranking_input"
            >
              <option>All chains</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select> */}
          </Stack>
        </div>

        <div className="ranking_table-wrapper">
          <div className="ranking_table">
          <Row className="ranking_table-header lufga-bold d-flex justify-content-between align-items-center">
            <Col className="text-center">Collection</Col>
            <Col className="text-center">Volume</Col>
            <Col className="text-center">7 day%</Col>
            <Col className="text-center">Floor Price</Col>
            <Col className="text-center">NFTs</Col>
            <Col className="text-center">Owner</Col>
          </Row>
          <br />
          {datas.map((data) => (
            <>
              <Row className="ranking_table-body d-flex justify-content-between align-items-center">
                <Col className="text-center">
                  <Stack gap={1} direction="horizontal">
                  <span className="lufga-bold">{data.id}</span>
                  <Image fluid src={data.avatar} height={25} width={25} className="rounded_img"/>
                    <small>{data.name}</small>
                  </Stack>
                </Col>
                <Col className="text-center">
                  <small>{data.volume}</small>
                </Col>
                <Col className="text-center">
                  <small style={{color:data.color}}>{data.percentage}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.price}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.asset}</small>
                </Col>
                <Col className="text-center">
                  <small>{data.owner}</small>
                </Col>
              </Row>
              <hr style={{ backgroundColor: "gray" }} />
            </>
          ))}
          </div>
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

export default Ranking;
