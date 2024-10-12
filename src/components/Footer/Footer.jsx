import { IoIosContact } from "react-icons/io";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Mohammed Mamun </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            libero tempora. Mollitia, quibusdam voluptatibus magnam suscipit
            explicabo dolorum nostrum ratione.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <IoIosContact />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @2025 Mohammed mamun. all right copyrigts here{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy of Police</p>
          <p>Connect with me </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
