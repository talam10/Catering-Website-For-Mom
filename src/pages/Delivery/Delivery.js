import React from 'react'
import HeroImage from "../../components/Background/BackGround";
import bgImage from "../../assets/Pitha/bgmenu.jpeg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import Shopping from './Shopping/Shopping'

const delivery = () => {
  return (
    <div><HeroImage
    bgImage={bgImage}
    heading={["Eat At ", <span> Home Sweet Home </span>,  "Alone or with the fam" ]}
    text="We would deliver at your doorsteps between 7am to 7pm Wednesday thu Sunday. Other two days? We need some time to prep and occasionally enjoy!"
  />
  <DeliveryInfo />
  <Shopping />
  </div>
  )
}

export default delivery