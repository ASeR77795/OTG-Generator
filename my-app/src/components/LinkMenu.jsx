import img1 from "../plug/img/SquaredMenu.png";
import img2 from "../plug/img/OTPgenerator.png";
import img3 from "../plug/img/Balancechecker.png";
import img4 from "../plug/img/Whitelistchecker.png";
import img5 from "../plug/img/Identities.png";
import img6 from "../plug/img/Users.png";
import "./LinkMenu.css";

export const LinkMenu = () => {
  return (
    <div className="link-menu">
      <button className="menu-button">
        <img src={img1} />
      </button>
      <div className="menu-box hide">
        <button>
          <img src={img2} />
        </button>
        <button>
          <img src={img3} />
        </button>
        <button>
          <img src={img4} />
        </button>
        <button>
          <img src={img5} />
        </button>
        <button>
          <img src={img6} />
        </button>
      </div>
    </div>
  );
};
