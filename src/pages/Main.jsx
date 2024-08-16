import React from "react";
import { useInView } from "react-intersection-observer";
import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

const MainPage = () => {
  // 각 섹션에 대한 inView 상태와 ref를 생성합니다.
  const { ref: section01, inView: section1InView } = useInView({ triggerOnce: true });
  const { ref: section02, inView: section2InView } = useInView({ triggerOnce: true });
  const { ref: section03, inView: section3InView } = useInView({ triggerOnce: true });
  const { ref: section04, inView: section4InView } = useInView({ triggerOnce: true });

  return (
    <div className="mainPage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <section
          ref={section01}
          className={section1InView ? "is_current" : ""}
          id="visualWrap"
          style={{
            backgroundImage: `url(${require("../assets/imgs/main/visual.png").default})`,
          }}
        >
          <div className="visualTitle">
            <svg width="242" height="61" viewBox="0 0 242 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M241.5 1H21L11 11L1 21V61" stroke="#B4B4B4" />
            </svg>

            <strong>LG CNS Cloud service</strong>
            <p>
              클라우드가 필요한 순간, 언제 어디서나 LG CNS가 있습니다. <br />
              클라우드가 열어갈 더 새롭고 편리해진 비즈니스 세상, 그 처음과 끝을 LG CNS가 함께합니다.
            </p>
            <svg width="244" height="61" viewBox="0 0 244 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M-9.53674e-06 60H222.792L232.896 50L243 40V0" stroke="#B4B4B4" />
            </svg>
          </div>
          <p className="visualScroll">Scroll</p>
        </section>

        <section ref={section02} className={section1InView ? "is_current" : ""}>
          <h2>Section 1</h2>
        </section>
        <section ref={section03} className={section2InView ? "is_current" : ""}>
          <h2>Section 2</h2>
        </section>
        <section ref={section04} className={section3InView ? "is_current" : ""}>
          <h2>Section 3</h2>
        </section>
      </Page>
    </div>
  );
};

export default MainPage;
