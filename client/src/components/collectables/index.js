import React from "react";
import { Stack } from "react-bootstrap";
import ExploreMore from "../SmallComponents/ExploreMore";
import CollectablesCards from "./CollectablesCards";
import "./Styles.css";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import Fade from 'react-reveal/Fade';

const data = {
  name: "Popular Collectables",
};

function Collectables() {
  const { width } = useWindowDimensions();
  return (
    <Fade bottom>
    <div className="metabloq_container">
      <Stack gap={2}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {width < 576 ? (
              <h2 className="font-weight-bold">
                {data.name.slice(0, 18) + (data.name.length > 18 ? ".." : "")}
              </h2>
            ) : (
              <h2 className="font-weight-bold">{data.name}</h2>
            )}
          </div>
          <ExploreMore />
        </div>
        <CollectablesCards />
      </Stack>
    </div>
    </Fade>
  );
}

export default Collectables;
