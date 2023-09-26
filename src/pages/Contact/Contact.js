import React from 'react'

import BackGround from "../../components/Background/BackGround";
import bgImage from "../../assets/Pitha/bgmenu.jpeg";

import Form from './Form/Form'

const Contact = () => {
  return (
    <div>
      <BackGround
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="WE would love to stay in touch with you <3"
      />
      <Form />
    </div>
  )
}

export default Contact