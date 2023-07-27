import React from "react";
import img1 from "../../plug/img/SquaredMenu.png";
import img2 from "../../plug/img/OTPgenerator.png";
import img3 from "../../plug/img/Balancechecker.png";
import img4 from "../../plug/img/Whitelistchecker.png";
import img5 from "../../plug/img/Identities.png";
import img6 from "../../plug/img/Users.png";
import "./LinkMenu.css";

function LinkMenu() {
  const [visible, setVisible] = React.useState("");
  const hide = () => {
    if (visible !== "") {
      setVisible("");
    } else {
      setVisible("hide");
    }
  };
  return (
    <div className="link-menu">
      <button className="menu-button" onClick={hide}>
        <img src={img1} />
      </button>
      <div className={`menu-box ${visible}`}>
        <a>
          <img src={img2} />
        </a>
        <a>
          <img src={img3} />
        </a>
        <a>
          <img src={img4} />
        </a>
        <a>
          <img src={img5} />
        </a>
        <a>
          <img src={img6} />
        </a>
      </div>
    </div>
  );
}
export default LinkMenu;
