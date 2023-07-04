import Header from "../../components/Header";
import CoffeeCard from "../../components/CoffeeCard";
import Footer from "../../components/Footer";
import "./style.css"


const About = () => {
  return (
    <div className="App">
      <Header />
      <section id="about" className="about">
        <section className="about_boxs">
          <section className="about_text">
            <span>About Us</span>
            <h3>There is all about Coffee house</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
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
          </section>
          <div className="about_img">
            <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/6c35f294-sung-wang-g4dgcf90em4-unsplash_109q0cs00000000000001o.jpg" />
            <img
              className="about_img2"
              src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/af0486ef-ben-white-yqgjos0ske-unsplash_10c308200000000000001o.jpg"
            />
          </div>
        </section>
      </section>
      <section>
        
      </section>
      <Footer/>
    </div>
  );
};

export default About;
