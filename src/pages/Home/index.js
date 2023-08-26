import Header from "../../components/Header";
import Slide from "../../components/Slide";
import Info from "../../components/Info";
import CoffeeCard from "../../components/CoffeeCard";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";
import CoffeeCardPhoto from "../../components/CoffeeCardPhoto";
import InstagramCard from "../../components/InstagramCard";
import Footer from "../../components/Footer";
import OnlineCoffes from "../../components/Onlinecoffes";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Slide />
      <div className="infos">
        <Info
          title="Awesomae Aroma"
          description="The coffee is brewed by first roasting the green coffee beans"
        />
        <Info
          title="High Quality"
          description="The coffee is brewed by first roasting the green coffee beans"
        />
        <Info
          title="Pure Grades"
          description="The coffee is brewed by first roasting the green coffee beans"
        />
        <Info
          title="Proper Roasting"
          description="The coffee is brewed by first roasting the green coffee beans"
        />
      </div>
      <section id="about" className="about">
        <section className="about_promotion">
          <div className="promotion_img">
            <img
              className="promotion_img1"
              alt="Promotion"
              src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/fe1055ff-img-4-1920x_10ci0ci00000000000001o.jpg"
            />
            <div className="promotion_img2">
              <img
                alt="Promotion"
                src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png"
              />
              <h3>Fine Quality & Ecological </h3>
            </div>
          </div>
          <div className="promotion_text">
            <div className="promotion_box">
              <h3>There is all about Coffee house</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="promotion_cards">
              <CoffeeCard
                img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/caa288e6-icon-1-1920x1_1000000000000000000028.png"
                title="Etiam orci"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              />
              <CoffeeCard
                img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/f5f1a7be-icon-2-1920x1_1000000000000000000028.png"
                title="Etiam orci"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              />
            </div>
          </div>
        </section>
        <section className="online_coffe">
          <h3>ONLINE COFFEE SHOP</h3>
          <div>
            <img
              alt="Promotion"
              src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="online_coffe_boxs">
            <OnlineCoffes
              img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1.png"
              name="ETHIOPIA COFFEE"
              price="$15.00"
            />
            <OnlineCoffes
              img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-3.png"
              name="KENYA COFFEE"
              price="$18.00"
            />
            <OnlineCoffes
              img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-8.png"
              name="GUATEMALA COFFEE"
              price="$20.00"
            />
            <OnlineCoffes
              img="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-5.png"
              name="COLUMBIA COFFEE"
              price="$25.00"
            />
          </div>
        </section>

        <section className="testimonial">
          <div className="testimonial_text">
            <p>Testimonial</p>
            <h3>What Our Clints Says</h3>
          </div>
          <div className="clint_cards">
            <ClientCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/wrpf0n-team-b1_102s02s00000000000001o.jpg"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              name="John Deo"
              person="Founder"
            />
            <ClientCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/15w7gjk-tyler-hardy_102s02s00000000000001o.jpg"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              name="Sumi Roy"
              person="Manager"
            />
            <ClientCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/vzqxf1-2_102s03002s02s00000401o.jpg"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              name="David Lee"
              person="Designer"
            />
          </div>
        </section>
        <section className="products">
          <div className="products_2">
            <div className="products_text">
              <div>
                <p>Special Online Shop</p>
                <h3>Our Popular Products</h3>
              </div>
              <Button text="See All Products" />
            </div>
            <div className="coffe_boxs">
              <CoffeeCardPhoto name="Americano Coffee" price="$13.6" />
              <CoffeeCardPhoto name="Black Coffee" price="$11.9" />
              <CoffeeCardPhoto name="Espresso Coffee" price="$18.1" />
              <CoffeeCardPhoto name="Cappuccino Coffee " price="$15.5" />
              <CoffeeCardPhoto name="Macchiato Coffee " price="$21.2" />
              <CoffeeCardPhoto name="Decaf Coffee " price="$17.9" />
            </div>
          </div>
        </section>
        <section className="instagram">
          <p>Follow Us Now</p>
          <h3>Follow on Instagram</h3>
          <div className="instagram_photos">
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/852773f8-instagram1_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/2a4601fd-instagram2_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/339a06f2-instagram3_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/d434b69a-instagram7_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/a6123231-instagram6_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/d434b69a-instagram7_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/443843e4-instagram8_108m08m00000000000001o.jpg" />
            <InstagramCard img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/a971018d-instagram9_108m08m00000000000001o.jpg" />
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
