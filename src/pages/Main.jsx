import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "../json/pages/MainSwiper.json";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const valueWrapRef = useRef(null);
  const swiperRef = useRef(null); // 스와이퍼 참조 추가
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.85,
  });

  useEffect(() => {
    if (inView && valueWrapRef.current) {
      const numberElements = valueWrapRef.current.querySelectorAll("li strong");
      numberElements.forEach((element) => {
        const targetValue = parseInt(element.dataset.number, 10);

        gsap.fromTo(
          element,
          { innerHTML: 0 },
          {
            innerHTML: targetValue,
            duration: 1.5,
            snap: {
              innerHTML: 1,
            },
            onUpdate: () => {
              element.innerHTML = Math.round(parseFloat(element.innerHTML));
            },
          }
        );
      });
    }
  }, [inView]);

  useEffect(() => {
    gsap.utils.toArray("section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom top",
            onEnter: () => section.classList.add("is_current"),
            onLeave: () => section.classList.remove("is_current"),
            onEnterBack: () => section.classList.add("is_current"),
            onLeaveBack: () => section.classList.remove("is_current"),
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="mainPage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <section
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

        <section id="mainContent1">
          <hgroup>
            <h2>
              글로벌 3사 최고 등급 파트너, <br />
              LG CNS Cloud Service
            </h2>
            <p>
              국내에서는 유일하게 글로벌 CSP 3사의 최고등급 파트너십을 획득할 만큼 <br />
              탁월한 전문성을 바탕으로 대한민국을 넘어 전 세계 고객들과 만나고 있습니다.
            </p>
          </hgroup>
          <div className="videoWrap">
            <img src={require("../assets/imgs/main/video.png").default} alt="" />
          </div>
          <div className="partnersWrap">
            <ul>
              <li>
                <strong>AWS Premier Partner</strong>
                <p>‘Services Partner of the Year’</p>
                <img src={require("../assets/imgs/main/partner01.svg").default} alt="" />
              </li>
              <li>
                <strong>GCP Premier Partner</strong>
                <p>
                  ‘24 ‘Services Partner’ <br />
                  ‘23 ‘Sales & Services Partner’
                </p>
                <img src={require("../assets/imgs/main/partner02.svg").default} alt="" />
              </li>
              <li>
                <strong>Azure Expert MSP Partner</strong>
                <p>
                  ‘24 ‘Top Partner of Modern Work’ <br />
                  ‘23 ‘Top Partner for Azure Infra’
                </p>
                <img src={require("../assets/imgs/main/partner03.svg").default} alt="" />
              </li>
            </ul>
          </div>
        </section>

        <section
          id="mainContent2"
          ref={(node) => {
            valueWrapRef.current = node;
            inViewRef(node); // 요소가 inView를 감지하도록 설정
          }}
        >
          <hgroup>
            <h2>
              최고 수준의 <br />
              클라우드 전문가들 <br />
              최적의 서비스.
            </h2>
            <p>
              국내 최고 클라우드 전문가들이 최적의 서비스를 책임집니다. <br />
              빠르고 복잡한 클라우드 환경 속에서 최신기술 전담 조직이 <br />
              최적화된 기술을 쉽게 적용할 수 있도록 도와드립니다.
            </p>
          </hgroup>
          <div className="valueWrap">
            <ul>
              <li>
                <strong data-number="900">0</strong>
                <p>
                  국내 최초 AM 전문조직 및 <br />
                  최다 전문가 보유
                </p>
              </li>
              <li>
                <strong data-number="2000">0</strong>
                <p>
                  컨설팅부터 전환, 구축 운영까지 <br />
                  국내 최고 수준의 클라우드 전문인력 보유
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="mainContent3">
          <hgroup>
            <h2>
              최적화된 클라우드 생태계를 <br />
              구축하기 위한 완벽한 준비를 갖췄습니다.
            </h2>
            <p>고객이 원하는 꼭 맞는 해답을 가지고 디지털 혁신 여정의 믿음직한 동반자가 되겠습니다.</p>
            <Link to="/serviceOfferings">
              Services & Offerings
              <img src={require("../assets/imgs/main/link_arrow.svg").default} alt="" />
            </Link>
          </hgroup>
          <div className="swiperWrap">
            <Swiper spaceBetween={20} slidesPerView={4} centeredSlides={true} loop={true} ref={swiperRef}>
              {SwiperData.map((item) => (
                <SwiperSlide key={item.number}>
                  <strong className="type">{item.type}</strong>
                  <sub className="number">{item.number}</sub>
                  <span className="title">{item.title}</span>
                  <p className="sub">{item.sub}</p>
                  <img src={item.image} alt={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <div className="sectionWrapper">
          <h2>
            최적화된 <br />
            <mark>맞춤형 서비스</mark>를 <br />
            제공합니다.
          </h2>
          <section id="mainContent4">
            <hgroup>
              <sub>service 01</sub>
              <span>클라우드 통합 관리 플랫폼</span>
              <p>
                비용부터 지원까지 다양한 영역을 <br />
                손쉽고 빠르게 확인, 관리할 수 있는 <br />
                클라우드 통합관리 플랫폼
              </p>
            </hgroup>
            <ul>
              <li>
                <p>Inventory</p>
                <span>인벤토리</span>
                <img src={require("../assets/imgs/main/service_img01.svg").default} alt="" />
              </li>
              <li>
                <p>Cost Management</p>
                <span>비용관리</span>
                <img src={require("../assets/imgs/main/service_img02.svg").default} alt="" />
              </li>
              <li>
                <p>Technical Support</p>
                <span>기술지원</span>
                <img src={require("../assets/imgs/main/service_img03.svg").default} alt="" />
              </li>
              <li>
                <p>Monitoring & Alerts</p>
                <span>모니터링 및 알림</span>
                <img src={require("../assets/imgs/main/service_img04.svg").default} alt="" />
              </li>
              <li>
                <p>Security & Governance</p>
                <span>보안 및 거버넌스</span>
                <img src={require("../assets/imgs/main/service_img05.svg").default} alt="" />
              </li>
              <li>
                <p>FinOps</p>
                <span>Financial Operations</span>
                <img src={require("../assets/imgs/main/service_img06.svg").default} alt="" />
              </li>
            </ul>
          </section>

          <section id="mainContent5">
            <hgroup>
              <sub>service 02</sub>
              <span>클라우드 최적화 운영 서비스</span>
              <p>
                인프라, 응용시스템, 보안, <br />
                전문가 서비스 등을 통합한 최적의 <br />
                클라우드 운영 시스템 구축 서비스
              </p>
            </hgroup>
            <ul
              style={{
                backgroundImage: `url(${require("../assets/imgs/main/process.svg").default})`,
              }}
            >
              <li>01 운영 및 모니터링</li>
              <li>02 클라우드 Advisory</li>
              <li>03 클라우드 최적화</li>
              <li>04 보안 특화 서비스</li>
            </ul>
          </section>
        </div>

        <div className="bannerWrap">
          <img src={require("../assets/imgs/main/banner.png").default} alt="" />
        </div>

        <div className="sectionWrapper bgNone">
          <h2>
            고객과 함께한 <br />
            클라우드 혁신 경험을 <br />
            소개합니다
          </h2>
          <section id="mainContent6">
            <hgroup>
              <sub>Experience 01</sub>
              <img src={require("../assets/imgs/main/logo_koreanair.svg").default} alt="" />
            </hgroup>
            <div>
              <span>
                항공사 최초 전사 시스템 <br />
                클라우드 전환 성공
              </span>
              <p>
                600여대 서버, 100여개 시스템 모두를 <br />
                클라우드로 전환하며 비즈니스 혁신을 이뤄냈습니다.
                <a className="downloadBtn" href="/" download>
                  사례 다운로드
                </a>
              </p>
              <img src={require("../assets/imgs/main/koreanair_img01.png").default} alt="" />
            </div>
          </section>

          <section id="mainContent7">
            <hgroup>
              <sub>Experience 02</sub>
              <img src={require("../assets/imgs/main/logo_hanwha.svg").default} alt="" />
            </hgroup>
            <div>
              <span>
                항공사 최초 전사 시스템 <br />
                클라우드 전환 성공
              </span>
              <p>
                600여대 서버, 100여개 시스템 모두를 <br />
                클라우드로 전환하며 비즈니스 혁신을 이뤄냈습니다.
                <a className="downloadBtn" href="/" download>
                  사례 다운로드
                </a>
              </p>
              <img src={require("../assets/imgs/main/hanwha_img01.png").default} alt="" />
            </div>
          </section>
        </div>

        <section id="mainContent5">
          <hgroup>
            <h2></h2>
            <p></p>
          </hgroup>
        </section>
      </Page>
    </div>
  );
};

export default MainPage;
