
import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuList.css";

import image1 from "../../../assets/Pitha/Chitoi.jpeg"
import image2 from "../../../assets/Pitha/bhapa.jpeg"
import image3 from "../../../assets/Pitha/patishaptha.jpeg"
import image4 from "../../../assets/Pitha/NokshiPitha.jpeg"
import image5 from "../../../assets/Pitha/Pakkon.jpeg"

const menuData = [
  {
    title: "Chitoi Pitha (4) [vegan]",
    description: "Eggless, rice based steamed pancake. Can be served with cilantro chutney, mustard paste or molasses",
    price: "10.50",
    img: image1,
  },
  {
    title: "Bhapa Pitha: Sweet or Savory (4)",
    description: "Steamed rice cake with freshly made rice flour, coconut and molasses (the sweet version) OR Steamed rice cake with freshly made rice flour with cilantro and masala spices",
    price: "10.50",
    img: image2,
  },
  {
    title: "PatiShaptha Pitha (4)",
    description: "A crepe dish made with rice flour and is stuffed with a coconut and jaggery mixture. The filling inside is a creamy texture made with sweet flavors of cardamom.",
    price: "10.50",
    img: image3,
  },
  {
    title: "Nokshi Pitha (4)",
    description: "A thick batter of rice flour with milk that is deep fried AFTER being done some beautiful designs. These pastry like rice cakes are overnight soaked in thick, rich molasses/ date juice syrup",
    price: "12.50",
    img: image4,
  },
  {
    title: "Pakkon Pitha (4)",
    description: "The sister of Nokshi Pitha: while Nokshi pitha is more hard -- biscuit/ cookie like texture, this cake gives you the same taste and aftermath but on a chewy, gooey side. It has all the looks, sweetness and taste but not as strong headed as Nokshi.",
    price: "10.50",
    img: image5,
  }
];

const MenuList = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>What </span>we Bring to the Table:
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
