import React from 'react'
import BackGround from "../../components/Background/BackGround";
import bgImage from "../../assets/Pitha/Kolar-Pitha.webp";
import AboutInfo from './AboutInfo/AboutInfo';

const about = () => {
  return (
    <div>
      <BackGround
        bgImage={bgImage}
        heading={["About Us: "]}
      />
      <AboutInfo />
    </div>
  )
}

export default about