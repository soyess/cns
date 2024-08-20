import React, { useEffect, useRef, useState } from "react";
import Page from "../components/Page.jsx";
import { gsap } from "gsap";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";
import PartnersShipData from "../json/pages/AboutPartnershipList.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const AboutPage = () => {
  const circleRef = useRef(null);

  const handleSlideChange = () => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: "+=360",
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
  };

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
            start: "top 30%",
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
    <div className="aboutPage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <section
          id="aboutVisualWrap"
          style={{
            backgroundImage: `url(${require("../assets/imgs/about/about_visual.png").default})`,
          }}
        >
          <strong>
            About <br />
            LG CNS CLOUD
          </strong>
          <p>
            LG CNS는 약속합니다
            <sub>최적화된 클라우드 서비스로 고객의 가치를 성장시키고 디지털 혁신의 꽃을 피워 가겠습니다.</sub>
          </p>
        </section>

        <section id="aboutContent1">
          <img src={require("../assets/imgs/about/about_video.png").default} alt="" />
        </section>
        <section id="aboutContent2">
          <div className="lettWrap">
            <span>
              Our <mark>Value</mark>
            </span>
            <p>
              30년 넘게 대한민국 IT산업의 발전을 이끌어 오면서 쌓아온 <br />
              전문성과 혁신성을 그대로 고객의 클라우드 서비스에 반영하여 고객의 가치를 한층 더 높이겠습니다.
            </p>
            <div className="circle" ref={circleRef}></div>
          </div>

          <div className="swiperWrap">
            <Swiper
              spaceBetween={20}
              slidesPerView={2.5}
              centeredSlides={true}
              direction={"vertical"}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide>
                <strong>Technology</strong>
                <span>기술 전문성</span>
                <p>
                  글로벌 CSP 3사의 최고 등급 파트너십을 획득한 <br />
                  전문가들과 함께합니다.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <strong>Networking</strong>
                <span>글로벌 네트워킹</span>
                <p>
                  글로벌 테크 기업과의 긴밀한 파트너십으로 <br />
                  최신 기술력을 업데이트합니다.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <strong>Knowhow</strong>
                <span>풍부한 노하우</span>
                <p>
                  금융,제조,유통,서비스,공공 등 <br />
                  다양한 산업 분야를 넘나듭니다.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section id="aboutContent3">
          <hgroup>
            <h2>
              <img src={require("../assets/imgs/about/award.svg").default} alt="" />
              국내 MSP 파트너 유일 <br />
              글로벌 CSP 3사 <br />
              최고 등급 파트너십
            </h2>
            <p>
              국내 MSP 파트너 중 유일하게 글로벌 CSP 3사의 국내 최고 등급 파트너십을 <br />
              모두 획득하고 있으며, 더불어 GenAI, Migraion, Machine Learning 등 다양한 분야의 <br />
              역량을 인정받아 사업을 강화해 나가고 있습니다.
            </p>
          </hgroup>
          <div className="swiperWrap">
            <Swiper spaceBetween={10} slidesPerView={6.2} speed={800}>
              {PartnersShipData.group1.map((item) => (
                <SwiperSlide key={item.title}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span className="title">{item.title}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="info">
              <span>
                AWS
                <mark>총 {PartnersShipData.group1.length}건</mark>
              </span>
              <ul>
                <li>4 AWS Competencies</li>
                <li>7 Partner Programs</li>
                <li>8 AWS Service Validations</li>
                <li>700+ AWS Certifications</li>
                <li>100+ AWS Customer Lanches</li>
              </ul>
            </div>
          </div>
          <div className="swiperWrap">
            <Swiper spaceBetween={10} slidesPerView={6.2} speed={800}>
              {PartnersShipData.group2.map((item) => (
                <SwiperSlide key={item.title}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span className="title">{item.title}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="info">
              <span>
                GCP
                <mark>총 {PartnersShipData.group2.length}건</mark>
              </span>
            </div>
          </div>
          <div className="swiperWrap">
            <Swiper spaceBetween={10} slidesPerView={6.2} speed={800}>
              {PartnersShipData.group3.map((item) => (
                <SwiperSlide key={item.title}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span className="title">{item.title}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="info">
              <span>
                MS
                <mark>총 {PartnersShipData.group3.length}건</mark>
              </span>
            </div>
          </div>
        </section>

        <section id="aboutContent4">
          <video src="/assets/video/lgcns_service_offering.mp4" autoplay="true" muted="muted" loop="true" playsinline=""></video>
        </section>
      </Page>
    </div>
  );
};

export default AboutPage;
