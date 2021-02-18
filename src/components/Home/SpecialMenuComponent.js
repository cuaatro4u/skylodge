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

  //Non-Veg Starter
  const [nonVegStarter] = useState([
    {
      id: 33,
      name: "Chicken Tikka",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 34,
      name: "Lebnani Tikka",
      type: "Non Veg Chicken Starter",
      price: "110 /-",
    },
    {
      id: 35,
      name: "Chicken Manchurian",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 36,
      name: "Fish Tikka",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 37,
      name: "Fish Finger",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 38,
      name: "Chicken Tandoori",
      type: "Non Veg Chicken Starter",
      price: "299/- 159/-",
    },
    {
      id: 39,
      name: "Chilli Chicken",
      type: "Non Veg Chicken Starter",
      price: "90 /-",
    },
    {
      id: 40,
      name: "Egg Roll",
      type: "Non Veg Chicken Starter",
      price: "30 /-",
    },
    {
      id: 41,
      name: "Chicken Roll",
      type: "Non Veg Chicken Starter",
      price: "40 /-",
    },
    {
      id: 42,
      name: "Egg Chicken Roll",
      type: "Non Veg Chicken Starter",
      price: "50 /-",
    },
    {
      id: 43,
      name: "Egg Chow",
      type: "Non Veg Chicken Starter",
      price: "40 /-",
    },
    {
      id: 44,
      name: "Chicken Chow",
      type: "Non Veg Chicken Starter",
      price: "50 /-",
    },
    {
      id: 45,
      name: "Mixed Chow",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 46,
      name: "Chicken Pizza",
      type: "Non Veg Chicken Starter",
      price: "100 /- 80/-",
    },
    {
      id: 47,
      name: "Dal Fry",
      type: "Non Veg Chicken Starter",
      price: "30 /-",
    },
    {
      id: 48,
      name: "kadhai Paneer",
      type: "Non Veg Chicken Starter",
      price: "90 /-",
    },
    {
      id: 49,
      name: "Palak Paneer",
      type: "Non Veg Chicken Starter",
      price: "95 /-",
    },
    {
      id: 50,
      name: "Palak Butter Masala",
      type: "Non Veg Chicken Starter",
      price: "100 /-",
    },
    {
      id: 51,
      name: "Mixed Veg Garden Surprise",
      type: "Non Veg Chicken Starter",
      price: "75 /-",
    },
  ]);

  //Veg Main Course
  const [vegMainCourse] = useState([
    {
      id: 47,
      name: "Dal Fry",
      type: "Main Course(Veg)",
      price: "30 /-",
    },
    {
      id: 48,
      name: "Kadhai Paneer",
      type: "Main Course(Veg)",
      price: "90 /-",
    },
    {
      id: 49,
      name: "Palak Paneer",
      type: "Main Course(Veg)",
      price: "95 /-",
    },
    {
      id: 50,
      name: "Palak Butter Masala",
      type: "Main Course(Veg)",
      price: "100 /-",
    },
    {
      id: 51,
      name: "Mixed Veg Garden Surprise",
      type: "Main Course(Veg)",
      price: "75 /-",
    },
  ]);

  //Non-Veg Main Course
  const [nonVegMainCourse] = useState([
    {
      id: 52,
      name: "Murg Matka",
      type: "Main Course(Non Veg)",
      price: "100 /-",
    },
    {
      id: 53,
      name: "Chicken Tikka Butter Masala",
      type: "Main Course(Non Veg)",
      price: "120 /-",
    },
    {
      id: 54,
      name: "Chicken Manchurian",
      type: "Main Course(Non Veg)",
      price: "95 /-",
    },
    {
      id: 55,
      name: "Chicken Biriyani",
      type: "Main Course(Non Veg)",
      price: "100 /-",
    },
    {
      id: 56,
      name: "Fish Curry",
      type: "Main Course(Non Veg)",
      price: "80 /-",
    },
    {
      id: 57,
      name: "Chicken Tikka Masala",
      type: "Main Course(Non Veg)",
      price: "100 /-",
    },
    {
      id: 58,
      name: "Plane Nun",
      type: "Main Course(Non Veg)",
      price: "15 /-",
    },
    {
      id: 59,
      name: "Romali Roti",
      type: "Main Course(Non Veg)",
      price: "15 /-",
    },
    {
      id: 60,
      name: "Butter Nun",
      type: "Main Course(Non Veg)",
      price: "20 /-",
    },
    {
      id: 61,
      name: "Lakcha Paratha",
      type: "Main Course(Non Veg)",
      price: "25 /-",
    },
  ]);

  //Rice
  const [rice] = useState([
    {
      id: 62,
      name: "Jeera Rice",
      type: "Rice",
      price: "30 /-",
    },
    {
      id: 63,
      name: "Steam Rice",
      type: "Rice",
      price: "20 /-",
    },
    {
      id: 64,
      name: "Biriyani Rice",
      type: "Rice",
      price: "25 /-",
    },
    {
      id: 65,
      name: "Veg Polao",
      type: "Rice",
      price: "35 /-",
    },
    {
      id: 66,
      name: "Makai Polao",
      type: "Rice",
      price: "35 /-",
    },
    {
      id: 67,
      name: "Peas Polao",
      type: "Rice",
      price: "35 /-",
    },
    {
      id: 68,
      name: "Veg Polao",
      type: "Rice",
      price: "75 /-",
    },
  ]);

  // Dessert
  const [dessert] = useState([
    {
      id: 69,
      name: "Vanilla",
      type: "Dessert",
      price: "30 /-",
    },
    {
      id: 70,
      name: "Strawberry",
      type: "Dessert",
      price: "30 /-",
    },
    {
      id: 71,
      name: "Chocolate",
      type: "Dessert",
      price: "35 /-",
    },
    {
      id: 72,
      name: "Mango",
      type: "Dessert",
      price: "30 /-",
    },
    {
      id: 73,
      name: "Golab Jamun",
      type: "Dessert",
      price: "25 /-",
    },
    {
      id: 74,
      name: "Finni",
      type: "Dessert",
      price: "35 /-",
    },
    {
      id: 75,
      name: "Green Salad",
      type: "Dessert",
      price: "30 /-",
    },
    {
      id: 76,
      name: "Fry Papad",
      type: "Dessert",
      price: "10 /-",
    },
    {
      id: 77,
      name: "Dahi Puri(9 pC)",
      type: "Dessert",
      price: "40 /-",
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
      db_name: "nonVegMainCourse",
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

              {data.db_name === "drinksMocktail" &&
                drinksMocktail.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Milke Shake */}

              {data.db_name === "milkShake" &&
                milkShake.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Veg Starter  */}

              {data.db_name === "vegStarter" &&
                vegStarter.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
                    style={{
                      backgroundImage: "url(" + mainCourseImgTwo + ")",
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Non Veg Starter  */}

              {data.db_name === "nonVegStarter" &&
                nonVegStarter.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
                    style={{
                      backgroundImage: "url(" + mainCourseImgOne + ")",
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Veg Main Course  */}

              {data.db_name === "vegMainCourse" &&
                vegMainCourse.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
                    style={{
                      backgroundImage: "url(" + mainCourseImgFour + ")",
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Non Veg Main Course  */}

              {data.db_name === "nonVegMainCourse" &&
                nonVegMainCourse.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
                    style={{
                      backgroundImage: "url(" + mainCourseImgOne + ")",
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Rice  */}
              {data.db_name === "rice" &&
                rice.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
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
                        alt="..."
                      />
                    </div>
                  </div>
                ))}

              {/* Dessert  */}
              {data.db_name === "dessert" &&
                dessert.map((data) => (
                  <div
                    className="img-card shadow"
                    key={data.id}
                    style={{
                      backgroundImage: "url(" + desertOne + ")",
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
                        alt="..."
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
