import React from "react";
import "./Identities.css";
import plus from "../../plug/img/plus.png";
import fileImport from "../../plug/img/fileImport.png";
import bell from "../../plug/img/bell.png";
import LinkMenu from "../OTPgenerator/LinkMenu";
import shareBtn from "../../plug/img/shareBtn.png";
import trashBtn from "../../plug/img/trashBtn.png";

export default function Identities() {
  const [rows, setRows] = React.useState([
    {
      name: "",
      phone: "",
      gmail: "",
      twitter: "",
      discord: "",
      created: "",
      shared_with: "",
    },
    {
      name: "Identity 1",
      phone: "380888888888",
      gmail: "mail@gmail.com",
      twitter: "twitteracc11",
      discord: "dicordlogin",
      created: "10/07/2023 10:22",
      shared_with: "999",
    },
    {
      name: "Identity 2",
      phone: "380888888888",
      gmail: "mail@gmail.com",
      twitter: "twitteracc11",
      discord: "dicordlogin",
      created: "10/07/2023 10:22",
      shared_with: "999",
    },
    {
      name: "Identity 2",
      phone: "380888888888",
      gmail: "mail@gmail.com",
      twitter: "twitteracc11",
      discord: "dicordlogin",
      created: "10/07/2023 10:22",
      shared_with: "999",
    },
    {
      name: "Identity 2",
      phone: "380888888888",
      gmail: "mail@gmail.com",
      twitter: "twitteracc11",
      discord: "dicordlogin",
      created: "10/07/2023 10:22",
      shared_with: "999",
    },
  ]);

  const keys = Object.keys(rows[0]);

  return (
    <div className="header-box">
      <div className="header">
        <div className="header-title">
          <h1>Identities</h1>
          <button className="btn plus">
            <img src={plus} alt="Plus" />
          </button>
          <button className="btn import">
            <img src={fileImport} alt="Import" />
          </button>
        </div>
        <div className="header-menu">
          <button className="btn bell">
            <img src={bell} alt="Bell" />
          </button>
          <LinkMenu />
        </div>
      </div>
      <div className="content">
        <table>
          <tr>
            {keys.map((key) => (
              <th key={key} className="title-item">
                {key}
              </th>
            ))}
          </tr>

          {rows.map((row, index) => {
            const values = Object.values(row);
            return (
              <tr key={index}>
                {values.map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
                <button>
                  <img src={shareBtn} />
                </button>
                <button>
                  <img src={trashBtn} />
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
