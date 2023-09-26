import React from "react";
import BackGround from "../../components/Background/BackGround";
import bgImage from "../../assets/Pitha/bgexmple.jpeg";
import MenuList from "./MenuList/MenuList";


const Menu = () => {
  return (
    <div>
      <BackGround
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuList />
    </div>
  );
};

export default Menu;
