import services from "../json/Services.json";
import images from "../img/svg.webp";
import arrow from "../assets/right-arrow.svg";
const Services = () => {
  return (
    <div id="service" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img className="services-images" src={images} alt="" />
      </div>
      <div className="services-container">
        {services.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <p>{service.desc}</p>
              <div className="services-readmore">
                <p>read more</p>
                <img className="arrow-image" src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
