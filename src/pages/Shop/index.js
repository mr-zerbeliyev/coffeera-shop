import React from "react";
import Header from "../../components/Header";
import CoffeePhoto from "../../components/CoffeePhoto";
import Footer from "../../components/Footer";

const Shop = () => {
  return (
    <div className="App">
      <Header />
      <section id="about" className="about">
        <section id="shop" className="photo_slayd">
          <div className="photo_text">
            <p>Our Special Menu</p>
            <h3> Photo Gallery</h3>
          </div>
          <div className="photos">
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/4cd48a88-anna-tukhfatullina-food-photographer-stylist-xs3ivs2dlso-unsplash_109q0dh09q06y00003p01o.jpg"
              title="Americano Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/3d79d961-martin-widenka-0ri80lqco18-unsplash_109q0cz09q06y00002a01o.jpg"
              title="Black Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/b98c237b-pablo-merchan-montes-tw4vcs9c-8-unsplash_109q0c509q06y00003i01o.jpg"
              title="Espresso Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/4cd48a88-anna-tukhfatullina-food-photographer-stylist-xs3ivs2dlso-unsplash_109q0dh09q06y00003p01o.jpg"
              title="Americano Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/3d79d961-martin-widenka-0ri80lqco18-unsplash_109q0cz09q06y00002a01o.jpg"
              title="Black Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
            <CoffeePhoto
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/b98c237b-pablo-merchan-montes-tw4vcs9c-8-unsplash_109q0c509q06y00003i01o.jpg"
              title="Espresso Coffee"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
            />
          </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
};

export default Shop;
