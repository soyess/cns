import React from "react";
import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <span>Contact</span>
      </Page>
    </div>
  );
};

export default ContactPage;
