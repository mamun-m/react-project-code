/* eslint-disable react/no-unescaped-entities */
import location from "../../assets/location.svg";
import call from "../../assets/call.svg";
import gmail from "../../assets/gmail.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "663b5557-d850-49c6-94de-216754a55757");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("successful your messages ! ");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sunt natus possimus placeat at ducimus saepe vero,
            incidunt aspernatur repudiandae.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="svg-details-img-icons" src={gmail} alt="" />
              <p>qualified@gmail.com</p>
            </div>

            <div className="contact-detail">
              {" "}
              <img className="svg-details-img-icons" src={call} alt="" />
              <p>+654545455454</p>
            </div>
            <div className="contact-detail">
              <img className="svg-details-img-icons" src={location} alt="" />
              <p>Ca : 3.5244 road canada </p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name : </label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="">Email </label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write you message here </label>
          <textarea name="text" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
