import "./Form.css";
import MyFormComponent from "./MyFormComponent";
import formImg from "../../asset/img/275.png"

const Form = () => {
  return (
    <div className="form__section" id="form_sec">
      <div className="form_sec_1">
        <h1 className="form_head">Request A Quote Now!</h1>
        <img className="form_img" src={formImg} alt="logo"></img>
      </div>
      <div className="form_sec_2">
        <MyFormComponent />
      </div>
    </div>
  );
};

export default Form;
