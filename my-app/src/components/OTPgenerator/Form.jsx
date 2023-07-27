import "./Form.css";
import img1 from "../../plug/img/LoadingSign.png";
import React from "react";

function Form() {
  const arrNames = [];
  const arrCodes = [];
  const [records, setRecords] = React.useState([{ name: "", code: "" }]);

  const addField = () => {
    setRecords([...records, { name: "", code: "" }]);
    console.log(records);
  };

  const handleChange = (index, field, value) => {
    const updatedRecords = [...records];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setRecords(updatedRecords);
  };

  const saveField = () => {
    addLocal();
  };
  const addLocal = () => {
    localStorage.setItem("name", JSON.stringify(records));
  };

  return (
    <form className="modal">
      {records.map((record, index) => (
        <div className="modal-input" key={index}>
          <input
            className="input-secret"
            type="text"
            placeholder="Name"
            name="name"
            value={record.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            className="input-secret"
            type="text"
            placeholder="OTP Secret"
            name="secret"
            value={record.code}
            onChange={(e) => handleChange(index, "code", e.target.value)}
          />
          <div className="timer">
            <img src={img1} alt="Loading sign" />
          </div>
          <div className="code">555 555</div>
          <div className="instruction">copied to clipboard</div>
          <div className="error">error, check secret!</div>
        </div>
      ))}
      <div className="btn-box">
        <button className="save-btn" type="button" onClick={saveField}>
          Save
        </button>
        <button className="btn-add" type="button" onClick={addField}>
          +
        </button>
      </div>
    </form>
  );
}

export default Form;
