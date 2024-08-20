import React from "react";
import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <img className="map" src={require("../assets/imgs/contact/map.png").default} alt="" />
        <section>
          <div className="left">
            <span>LG CNS</span>
          </div>
          <div className="right">
            <p>서울시 강서구 마곡중앙8로 71 LG사이언스파크 E13, E14</p>
            <sub>E13, E14, 71, Magokjungang 8-ro, Gangseo-gu, Seoul, Republic of Korea</sub>

            <a href="mailto:cloud.marketing@lgcns.com">
              <img src={require("../assets/imgs/contact/mail.svg").default} alt="" />
              cloud.marketing@lgcns.com
            </a>
            <img className="contactBanner" src={require("../assets/imgs/contact/contact_banner.png").default} alt="" />
            <strong>CONTACT US</strong>
          </div>
        </section>
      </Page>
    </div>
  );
};

export default ContactPage;
