export const Form = () => {
  return (
    <form className="modal">
      <div className="modal-input">
        <input className="input-name" type="text" placeholder="name" />
        <input className="input-secret" type="text" placeholder="OTP Secret" />
        <div className="timer"></div>
        <div className="code">555 555</div>

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
