import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./Shopping.css";
import image1 from "../../../assets/Pitha/Chitoi.jpeg"
import image2 from "../../../assets/Pitha/bhapa.jpeg"
import image3 from "../../../assets/Pitha/patishaptha.jpeg"
import image4 from "../../../assets/Pitha/NokshiPitha.jpeg"
import image5 from "../../../assets/Pitha/Pakkon.jpeg"

const menuDataLeft = [
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
    title: "PatiShaptha Pitha",
    description: "A crepe dish made with rice flour and is stuffed with a coconut and jaggery mixture. The filling inside is a creamy texture made with sweet flavors of cardamom.",
    price: "10.50",
    img: image3,
  },
  
];

const menuDataRight = [
  {
    title: "Nokshi Pitha",
    description: "A thick batter of rice flour with milk that is deep fried AFTER being done some beautiful designs. These pastry like rice cakes are overnight soaked in thick, rich molasses/ date juice syrup",
    price: "12.50",
    img: image4,
  },
  {
    title: "Pakkon Pitha",
    description: "The sister of Nokshi Pitha: while Nokshi pitha is more hard -- biscuit/ cookie like texture, this cake gives you the same taste and aftermath but on a chewy, gooey side. It has all the looks, sweetness and taste but not as strong headed as Nokshi.",
    price: "10.50",
    img: image5,
  },
];

const AddToCart = () => {
  return (
    <div className="container add-to-cart">
      <h1 className="heading-secondary">
        <span>click </span> to add to cart
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>


            <div className="addtocart-btn">
                <h1 className="heading-secondary">
                    <span> All </span> Done?
                </h1>

                <button>Show cart & Checkout</button>
            </div>

    </div>
  );
};

export default AddToCart;
