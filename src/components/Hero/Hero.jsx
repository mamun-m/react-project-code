import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="mamun-profile-image" src="/src/img/svg.JPG" alt="" />
      <h1>
        {" "}
        <span> I,m mamun</span>, frontend developer based in bangladesh.{" "}
      </h1>
      <p>
        i am a front end developer from bangladesh with 10 year experinces
        multiples works experinces{" "}
      </p>
      <div className="here-action">
        <div className="here-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            connect with me{" "}
          </AnchorLink>
        </div>
        <div className="here-resume">my resume</div>
      </div>
    </div>
  );
};

export default Hero;
