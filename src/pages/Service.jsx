import React from "react";
import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

const ServicePage = () => {
  return (
    <div className="servicePage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <section>
          <span style={{ color: "#fff", fontSize: "20px" }}>Service</span>
        </section>
      </Page>
    </div>
  );
};

export default ServicePage;
