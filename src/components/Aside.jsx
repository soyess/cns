import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import asideDB from "../json/Aside.json";
import asideImg01 from "../assets/imgs/aside/lgCnsCloud.png";
import asideImg02 from "../assets/imgs/aside/awsLogo.png";
import asideImg03 from "../assets/imgs/aside/googleCloud.png";
import asideImg04 from "../assets/imgs/aside/msAzure.png";
import asideImg05 from "../assets/imgs/aside/cloudXper.png";

const AsideNav = ({ pathName }) => {
  const [hrefName, setHrefName] = useState();

  useEffect(() => {
    if (hrefName === undefined || pathName === undefined) {
      pathName = "/";
      return setHrefName(pathName);
    }
    setHrefName(pathName);
    console.log(hrefName, "aside");
  }, [hrefName]);

  return (
    <div className="asideNav">
      <ul className="asideNavList">
        <li>
          <Link to="/" className={asideDB.home.filter((names) => names === hrefName).map((v) => (v ? "active" : ""))} style={{ backgroundImage: `url(${asideImg01})` }}></Link>
        </li>
        <li>
          <Link to="/" style={{ backgroundImage: `url(${asideImg02})` }}></Link>
        </li>
        <li>
          <Link to="/" style={{ backgroundImage: `url(${asideImg03})` }}></Link>
        </li>
        <li>
          <Link to="/" style={{ backgroundImage: `url(${asideImg04})` }}></Link>
        </li>
        <li>
          <Link to="/" style={{ backgroundImage: `url(${asideImg05})` }}></Link>
        </li>
      </ul>
    </div>
  );
};

export default AsideNav;
