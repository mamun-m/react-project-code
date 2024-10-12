import { mywork_img } from "../../assets/img";
import arrow from "../../assets/right-arrow.svg";
console.log(mywork_img);
const Mywork = () => {
  return (
    <div id="work" className="My-work">
      <div className="my-work-title">
        <h1>my work </h1>
      </div>
      <div className="my-work-container">
        {mywork_img.map((images, index) => {
          return <img key={index} src={images.img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <h1>show more </h1>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
