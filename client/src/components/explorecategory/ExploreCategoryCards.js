import React from "react";
import { ExploreCategoryData } from "./ExploreCategoryData";
import { Row, Col, Stack, Image } from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';
import { useNavigate } from "react-router-dom";
import { artAction, buildingAction, metapetsAction, miscellaneousAction, virtualrealestateAction, wearablesAction } from "../../redux/TabAction";
import { useDispatch } from "react-redux";

function ExploreCategoryCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <Row>
      {ExploreCategoryData.map((data) => (
        <Col xxl={2} xl={2} lg={2} md={2} sm={6} xs={6} className="mb-3 ">
          <Bounce>
          <div onClick={()=>{
              navigate("collections")
          }} className="explorecategory_cards metablog_cards h-100" key={data.id}>
            <Stack gap={2}>
              <div className="text-center">
                <Image
                  fluid
                  src={data.image}
                  alt="category"
                  height={60}
                  width={60}
                
                />
              </div>
              <div className="text-center">
                <span className="secondary-text poppins">{data.name}</span>
              </div>
            </Stack>
          </div>
          </Bounce>
        </Col>
      ))}
    </Row>
  );
}

export default ExploreCategoryCards;
