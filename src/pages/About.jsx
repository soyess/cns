import React, { useEffect, useRef, useState } from "react";
import Page from "../components/Page.jsx";
import { gsap } from "gsap";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PartnersShipData = {
  group1: [
    {
      title: "AWS Managed Service Provider (‘18.03)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_01.png").default,
    },
    {
      title: "Security Consulting Competency (‘20.12)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_02.png").default,
    },
    {
      title: "Migration Consulting Competency (‘20.06)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_03.png").default,
    },
    {
      title: "AWS Premier Tier Services (‘22.05)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_04.png").default,
    },
    {
      title: "AWS DevOps Competency (‘22.12)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_05.png").default,
    },
    {
      title: "Amazon EKS Service Delivery (‘22.06)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_06.png").default,
    },
    {
      title: "AWS Public Sector Partner (‘22)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_07.png").default,
    },
    {
      title: "APN Immersion Days (‘22)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_08.png").default,
    },
    {
      title: "AWS Certification (‘23.03)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_09.png").default,
    },
    {
      title: "AWS Lamba Service Delivery (‘23.10)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_10.png").default,
    },
    {
      title: "amazon Direct Connect Service Delivery (‘23.11)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_11.png").default,
    },
    {
      title: "amazon Redshift Delivery (‘23.11)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_12.png").default,
    },
    {
      title: "Amazon Connect Delivery (‘23.11)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_13.png").default,
    },
    {
      title: "AWS Well-Architected Partner Program (‘23.10)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_14.png").default,
    },
    {
      title: "국내최초 Generative AI Services Competency (‘24.06)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_15.png").default,
    },
    {
      title: "AWS Cloudformation Delivery (‘24.06)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_16.png").default,
    },
    {
      title: "amazon CloudFront Delivery (‘24.05)",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_17.png").default,
    },
    {
      title: "AWS Solution Provider Program",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_18.png").default,
    },
    {
      title: "Amazon RDS",
      image: require("../assets/imgs/about/partnership/group1/partnership_group1_19.png").default,
    },
  ],
  group2: [
    {
      title: "GCP Premier Partner (‘21.04)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_01.png").default,
    },
    {
      title: "국내최초 ML Specialization (‘21.07)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_02.png").default,
    },
    {
      title: "Infrastructure Specialization (’22.02)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_03.png").default,
    },
    {
      title: "Cloud Migration Specialization (’22.02)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_04.png").default,
    },
    {
      title: "Data Analytics Specialization (’23.11)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_05.png").default,
    },
    {
      title: "MSP Partner (’23 갱신)",
      image: require("../assets/imgs/about/partnership/group2/partnership_group2_06.png").default,
    },
  ],
  group3: [
    {
      title: "Azure Expert MSP (‘24.06 갱신)",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_01.png").default,
    },
    {
      title: "Microsoft Solution Partners (총 6개 영역 중 5개 획득)",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_02.png").default,
    },
    {
      title: "",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_03.png").default,
    },
    {
      title: "",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_04.png").default,
    },
    {
      title: "",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_05.png").default,
    },
    {
      title: "",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_06.png").default,
    },
    {
      title: "Gold 파트너 인증 6건 (’22 갱신)",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_07.png").default,
    },
    {
      title: "Gold 파트너 인증 6건 (’22 갱신)",
      image: require("../assets/imgs/about/partnership/group3/partnership_group3_08.png").default,
    },
  ],
};

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

  const [activeIndex, setActiveIndex] = useState(0);

  const keywordSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

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
            <sub>
              최적화된 클라우드 서비스로 고객의 가치를 <br className="br_600" /> 성장시키고 디지털 혁신의 꽃을 피워 가겠습니다.
            </sub>
          </p>
        </section>

        <section
          id="aboutContent1"
          style={{
            backgroundImage: `url(${require("../assets/imgs/about/about_scale.png").default})`,
          }}
        >
          <div className="keywordWrap">
            <p className="left">
              <i className={activeIndex === 0 ? "is_active" : ""}></i>
              <i className={activeIndex === 1 ? "is_active" : ""}></i>
              <i className={activeIndex === 2 ? "is_active" : ""}></i>
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              direction={"vertical"}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              onSlideChange={keywordSlideChange}
            >
              <SwiperSlide>
                <strong>Future Innovator</strong>
                <sub>압도적인 기술과 인프라</sub>
              </SwiperSlide>
              <SwiperSlide>
                <strong>Global Tospan Tier</strong>
                <sub>풍부한 경험과 노하우</sub>
              </SwiperSlide>
              <SwiperSlide>
                <strong>Trusted spanartner</strong>
                <sub>믿음직한 통합서비스</sub>
              </SwiperSlide>
            </Swiper>
            <p className="right">
              <i className={activeIndex === 0 ? "is_active" : ""}></i>
              <i className={activeIndex === 1 ? "is_active" : ""}></i>
              <i className={activeIndex === 2 ? "is_active" : ""}></i>
            </p>
          </div>
        </section>
        <section id="aboutContent2">
          <div className="leftWrap">
            <div className="circle" ref={circleRef}></div>
            <span>
              Our <mark>Value</mark>
            </span>
            <p>
              30년 넘게 대한민국 IT산업의 발전을 이끌어 오면서 쌓아온 <br />
              전문성과 혁신성을 그대로 고객의 클라우드 서비스에 반영하여 고객의 가치를 한층 더 높이겠습니다.
            </p>
          </div>

          <div className="swiperWrap">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
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
              breakpoints={{
                1300: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
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
            <Swiper
              spaceBetween={10}
              slidesPerView={1.5}
              speed={800}
              breakpoints={{
                550: {
                  slidesPerView: 2.8,
                },
                768: {
                  slidesPerView: 3.8,
                },
                1024: {
                  slidesPerView: 4.3,
                },
                1300: {
                  slidesPerView: 5,
                },
                1600: {
                  slidesPerView: 5.3,
                },
                1800: {
                  slidesPerView: 6.2,
                },
              }}
            >
              {PartnersShipData.group1.map((item) => (
                <SwiperSlide key={item.index}>
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
            <Swiper
              spaceBetween={10}
              slidesPerView={1.5}
              speed={800}
              breakpoints={{
                550: {
                  slidesPerView: 2.8,
                },
                768: {
                  slidesPerView: 3.8,
                },
                1024: {
                  slidesPerView: 4.3,
                },
                1600: {
                  slidesPerView: 5.3,
                },
                1800: {
                  slidesPerView: 6.2,
                },
              }}
            >
              {PartnersShipData.group2.map((item) => (
                <SwiperSlide key={item.index}>
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
            <Swiper
              spaceBetween={10}
              slidesPerView={1.5}
              speed={800}
              breakpoints={{
                550: {
                  slidesPerView: 2.8,
                },
                768: {
                  slidesPerView: 3.8,
                },
                1024: {
                  slidesPerView: 4.3,
                },
                1600: {
                  slidesPerView: 5.3,
                },
                1800: {
                  slidesPerView: 6.2,
                },
              }}
            >
              {PartnersShipData.group3.map((item) => (
                <SwiperSlide key={item.index}>
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
          <video src="/assets/video/lgcns_service_offering.mp4" autoplay="true" muted="muted" loop="true" playsInline=""></video>
        </section>
      </Page>
    </div>
  );
};

export default AboutPage;
