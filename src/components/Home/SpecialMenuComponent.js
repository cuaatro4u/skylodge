import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

// Photos
import starterImgOne from "../../assets/starter/starter-img-one.jpeg";
import starterImgTwo from "../../assets/starter/starter-img-two.jpeg";
import mainCourseImgOne from "../../assets/mainCourse/main-course-one.jpeg";
import mainCourseImgTwo from "../../assets/mainCourse/main-course-two.jpeg";
import mainCourseImgThree from "../../assets/mainCourse/main-course-three.jpeg";
import mainCourseImgFour from "../../assets/mainCourse/main-course-four.jpeg";
import desertOne from "../../assets/desert/desertOne.jpeg";
import desertTwo from "../../assets/desert/desertTwo.jpeg";
import cookingSvg from "../../assets/cookingSvg.svg";

function SpecialMenuComponent() {
  // Welcome Drink
  const [drinksMocktail] = useState([
    {
      id: 1,
      name: "Fresh Lemon Soda",
      type: "Welcome Drinks & Mocktail",
      price: "40 /-",
    },
    {
      id: 2,
      name: "Sprite",
      type: "Welcome Drinks & Mocktail",
      price: "25 /-",
    },
    {
      id: 3,
      name: "7-up",
      type: "Welcome Drinks & Mocktail",
      price: "25 /-",
    },
    {
      id: 4,
      name: "Thumbs up",
      type: "Welcome Drinks & Mocktail",
      price: "25 /-",
    },
    {
      id: 5,
      name: "Redbull",
      type: "Welcome Drinks & Mocktail",
      price: "125 /-",
    },
    {
      id: 6,
      name: "Tea",
      type: "Welcome Drinks & Mocktail",
      price: "10 /-",
    },
    {
      id: 7,
      name: "Lemon Tea",
      type: "Welcome Drinks & Mocktail",
      price: "08 /-",
    },
    {
      id: 8,
      name: "Masala Tea",
      type: "Welcome Drinks & Mocktail",
      price: "15 /-",
    },
    {
      id: 9,
      name: "Coffee",
      type: "Welcome Drinks & Mocktail",
      price: "25 /-",
    },
    {
      id: 10,
      name: "Special Coffee",
      type: "Welcome Drinks & Mocktail",
      price: "30 /-",
    },
    {
      id: 11,
      name: "Hot Chocolate Coffee",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 12,
      name: "Lassi",
      type: "Welcome Drinks & Mocktail",
      price: "30 /-",
    },
    {
      id: 13,
      name: "Strawberry Mojito",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 14,
      name: "Virgin Mojito",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 15,
      name: "Pina Kulata",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 16,
      name: "Mango Kulata",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 17,
      name: "Shave City",
      type: "Welcome Drinks & Mocktail",
      price: "50 /-",
    },
    {
      id: 18,
      name: "Fruit Punch",
      type: "Welcome Drinks & Mocktail",
      price: "60 /-",
    },
    {
      id: 19,
      name: "Missed Fantasy",
      type: "Welcome Drinks & Mocktail",
      price: "60 /-",
    },
    {
      id: 20,
      name: "Guava Delight",
      type: "Welcome Drinks & Mocktail",
      price: "60 /-",
    },
    {
      id: 21,
      name: "Fire Ball",
      type: "Welcome Drinks & Mocktail",
      price: "60 /-",
    },
  ]);

  // Milk Shake
  const [milkShake] = useState([
    {
      id: 22,
      name: "Vanila Shake",
      type: "Milk shake",
      price: "50 /-",
    },
    {
      id: 23,
      name: "Strawberry Shake",
      type: "Milk shake",
      price: "50 /-",
    },
    {
      id: 24,
      name: "Mango Shake",
      type: "Milk shake",
      price: "50 /-",
    },
    {
      id: 25,
      name: "Chocolate Shake",
      type: "Milk shake",
      price: "50 /-",
    },
    {
      id: 26,
      name: "Banana Milk Shake",
      type: "Milk shake",
      price: "65 /-",
    },
  ]);

  //Veg Starter
  const [vegStarter] = useState([
    {
      id: 27,
      name: "Paneer Tikka(4 PC)",
      type: "Veg Starter",
      price: "80 /-",
    },
    {
      id: 28,
      name: "Tandoori Aloo",
      type: "Veg Starter",
      price: "45 /-",
    },
    {
      id: 29,
      name: "Veg Pizza",
      type: "Veg Starter",
      price: "70 /- 65 /-",
    },
    {
      id: 30,
      name: "French Fry",
      type: "Veg Starter",
      price: "40 /-",
    },
    {
      id: 31,
      name: "Veg Manchurian",
      type: "Veg Starter",
      price: "50 /-",
    },
    {
      id: 32,
      name: "Veg Chow",
      type: "Veg Starter",
      price: "35 /-",
    },
  ]);

  // Menu List
  const [menu] = useState([
    {
      id: 1,
      name: "Welcome Drinks & Mocktail",
      db_name: "drinksMocktail",
    },
    {
      id: 2,
      name: "Milk Shake",
      db_name: "milkShake",
    },
    {
      id: 3,
      name: "Veg Starter",
      db_name: "vegStarter",
    },
    {
      id: 4,
      name: "Non-Veg Starter",
      db_name: "nonVegStarter",
    },
    {
      id: 5,
      name: "Veg-Main Course",
      db_name: "vegMainCourse",
    },
    {
      id: 6,
      name: "Non-Veg-Main Course",
      db_name: "nonVegManiCourse",
    },
    {
      id: 7,
      name: "Rice",
      db_name: "rice",
    },
    {
      id: 8,
      name: "Dessert",
      db_name: "dessert",
    },
  ]);
  return (
    <div className="special-menu" id="specialmenu">
      <div className="sm-details">
        <h6>Special Menu</h6>
        <h1>Delicious Flavour of Cuisine</h1>
        <br />
      </div>
      <div className="menu-tab">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          {menu.map((data) => (
            <Tab
              eventKey={data.id}
              key={data.id}
              title={data.name}
              className="tab-card-container"
            >
              {/* Drinks & Mocktail  */}

              {data.db_name == "drinksMocktail" &&
                drinksMocktail.map((data) => (
                  <div
                    className="img-card shadow"
                    style={{
                      backgroundImage: "url(" + starterImgOne + ")",
                    }}
                  >
                    <div className="overlay-menu-card">
                      <h4>{data.name}</h4>
                      <h6>
                        <b>Sky Lounge</b>
                      </h6>
                      <hr className="hr-custom" />
                      <br />
                      <img
                        src={cookingSvg}
                        className="img-fluid"
                        width="50px"
                      />
                    </div>
                  </div>
                ))}

              {/* Milke Shake */}
              {data.db_name == "milkShake" &&
                milkShake.map((data) => (
                  <div
                    className="img-card shadow"
                    style={{
                      backgroundImage: "url(" + starterImgTwo + ")",
                    }}
                  >
                    <div className="overlay-menu-card">
                      <h4>{data.name}</h4>
                      <h6>
                        <b>Sky Lounge</b>
                      </h6>
                      <hr className="hr-custom" />
                      <br />
                      <img
                        src={cookingSvg}
                        className="img-fluid"
                        width="50px"
                      />
                    </div>
                  </div>
                ))}

              {/* Veg Starter  */}

              {data.db_name == "vegStarter" &&
                vegStarter.map((data) => (
                  <div
                    className="img-card shadow"
                    style={{
                      backgroundImage: "url(" + mainCourseImgThree + ")",
                    }}
                  >
                    <div className="overlay-menu-card">
                      <h4>{data.name}</h4>
                      <h6>
                        <b>Sky Lounge</b>
                      </h6>
                      <hr className="hr-custom" />
                      <br />
                      <img
                        src={cookingSvg}
                        className="img-fluid"
                        width="50px"
                      />
                    </div>
                  </div>
                ))}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default SpecialMenuComponent;
