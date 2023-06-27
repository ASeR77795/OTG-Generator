import "./Form.css";
import img1 from "../plug/img/LoadingSign.png";
export const Form = () => {
  return (
    <form className="modal">
      <div className="modal-input">
        <input className="input-name" type="text" placeholder="name" />
        <input className="input-secret" type="text" placeholder="OTP Secret" />
        <div className="timer">
          <img src={img1} />
        </div>
        <div className="code">555 555</div>
        <div className="instruction">copied to clipboard</div>
        <div className="error">error, check secret!</div>
        <button className="btn-add" type="button">
          +
        </button>
      </div>
      <button className="modal-btn" type="button">
        Save
      </button>
    </form>
  );
};
