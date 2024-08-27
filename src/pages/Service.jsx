import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Page from "../components/Page.jsx";
import NavBar from "../components/Nav.jsx";
import AsideNav from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";

const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightContentRef = useRef(null);

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
            start: "top 50%",
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

  const services = [
    {
      navTitle: "컨설팅",
      navSubTitle: "Cloud Consulting",
      title: "클라우드 통합 컨설팅",
      description: "클라우드 컨설팅은 전략부터 전환 계획, 운영모델, 조직 및 역량 설계는 물론 도입 후의 변화 관리까지 통합 서비스를 제공합니다. 또한 고객 비즈니스 환경에 맞춰 취사 선택하거나 단계적 추진도 가능합니다.",
      image: require("../assets/imgs/service/service_img01.png").default,
      mobileImage: require("../assets/imgs/service/service_img01_mo.png").default,
      detailTitle: "컨설팅 세부 오퍼링",
      detail: [
        {
          icon: require("../assets/imgs/service//icon/list_1-1.svg").default,
          name: "Cloud Consulting",
          lead: "Enterprise관점에서 클라우드 도입을 |위한 전략 수립 및 도입 방향성 설정",
        },
        {
          icon: require("../assets/imgs/service//icon/list_1-2.svg").default,
          name: "AM Adoption Assessment",
          lead: "현재 클라우드 성숙도 수준을 진단하고 |목표수준을 설정",
        },
        {
          icon: require("../assets/imgs/service//icon/list_1-3.svg").default,
          name: "AM 적합성 평가",
          lead: "AM 성숙도 수준을 진단하고 |최적의 AM 전환 포트폴리오 제시",
        },
        {
          icon: require("../assets/imgs/service//icon/list_1-4.svg").default,
          name: "Gen AI Consulting",
          lead: "실질적 비즈니스 효과를 창출할 수 있는 |Gen AI 과제 발굴부터 전환, 구축 등 |중/장기 로드맵 수립",
        },
      ],
    },
    {
      navTitle: "전환 및 구축",
      navSubTitle: "Cloud Migration / Implementation",
      title: "최적의 클라우드 환경 구축",
      description: "클라우드 전환에 따른 리스크를 최소화하면서 하이브리드, 멀티 클라우드 활용 기반을 마련합니다. 클라우드 환경 구축을 위한 준비 작업부터 이관 및 설계까지 최적의 전환 환경을 만듭니다.",
      image: require("../assets/imgs/service/service_img02.png").default,
      mobileImage: require("../assets/imgs/service/service_img02_mo.png").default,
      detailTitle: "어플리케이션 현대화 세부 오퍼링",
      detail: [
        {
          icon: require("../assets/imgs/service//icon/list_2-1.svg").default,
          name: "Enterprise Cloud Migration",
          lead: "클라우드 기반의 신속/안전한 전환 및 |안정적 운영환경 도모",
        },
        {
          icon: require("../assets/imgs/service//icon/list_2-2.svg").default,
          name: "Cloud Foundation - Landing Zone",
          lead: "퍼블릭/멀티 클라우드 기반 |최적의 랜딩존 구축",
        },
        {
          icon: require("../assets/imgs/service//icon/list_2-3.svg").default,
          name: "Cloud DR",
          lead: "IT장애 및 재난/재해 대비해 |안정성 높은 Disaster Recovery 환경 구축",
        },
      ],
    },
    {
      navTitle: "애플리케이션 현대화",
      navSubTitle: "Application Modernization",
      title: "애플리케이션 현대화",
      description: "빠르게 변화하는 시장 환경 안에서 경쟁력을 확보하기 위해서는 애플리케이션 현대화가 필요합니다. 민첩한 비즈니스 운영과 유연한 고객 대응을 위해 운영 환경과 일하는 방식을 바꾸고 최신 애플리케이션을 적용하여 지속 가능한 최적의 환경을 구축합니다.",
      image: require("../assets/imgs/service/service_img03.png").default,
      mobileImage: require("../assets/imgs/service/service_img03_mo.png").default,
      detailTitle: "전환 및 구축 세부 오퍼링",
      detail: [
        {
          icon: require("../assets/imgs/service//icon/list_3-1.svg").default,
          name: "Application Modernization",
          lead: "비즈니스 환경 변화에 탄력적으로 대응하기 위한 |아키텍처로서의 변화",
        },
        {
          icon: require("../assets/imgs/service//icon/list_3-2.svg").default,
          name: "AM Discovery",
          lead: "기존 시스템 현대화 및 AM 역량 내재화, |신규 서비스 설계부터 도입효과 검증까지 |비즈니스 가치 혁신을 위한 최적의 대안 제시",
        },
        {
          icon: require("../assets/imgs/service//icon/list_3-3.svg").default,
          name: "AM Incubation camp",
          lead: "애플리케이션 현대화에 필요한 필수요소 학습 및 |프로젝트 실습",
        },
      ],
    },
    {
      navTitle: "클라우드 Data/AI",
      navSubTitle: "Cloud Data/AI",
      title: "기술을 활용한 더 효과적인 서비스",
      description: "AI, 빅데이터 기술을 활용하여 기업이 가진 자원을 더 효과적으로 활용할 수 있는 로드맵을 제시합니다. 글로벌 CSP사의 맞춤형 플랫폼 설계 및 구축과 파일럿 수행까지 최적화된 통합서비스를 제공합니다.",
      image: require("../assets/imgs/service/service_img04.png").default,
      mobileImage: require("../assets/imgs/service/service_img04_mo.png").default,
      detailTitle: "클라우드 Data/AI 세부 오퍼링",
      detail: [
        {
          icon: require("../assets/imgs/service//icon/list_4-1.svg").default,
          name: "cloud Gen AI Platform",
          lead: "CSP 플랫폼을 효과적으로 활용하여 |Gen AI 서비스 설계/구축",
        },
        {
          icon: require("../assets/imgs/service//icon/list_4-1.svg").default,
          name: "Data/AI Platform",
          lead: "Data/AI 전문기업 플랫폼의 효과적 도입 |및 설계/구축",
        },
        {
          icon: require("../assets/imgs/service//icon/list_4-1.svg").default,
          name: "Gen AI Studio",
          lead: "Gen AI 도입을 고민 중인 고객의 눈높이에 맞춘 워크샵|/프로토타이핑 프로그램 및 전시/체험 기회 제공",
        },
      ],
    },
    {
      navTitle: "운영 및 관리",
      navSubTitle: "Cloud Managed Service",
      title: "고객 특화 운영 서비스 제공",
      description: "클라우드 환경의 다양화로 비용과 보안 등 운영에 대한 관리가 점점 더 복잡해지고 있습니다. LG CNS 클라우드는 전문화된 신기술 기반의 응용 시스템으로 안전하고 효율적인 고객 특화 운영 서비스를 제공합니다.",
      image: require("../assets/imgs/service/service_img05.png").default,
      mobileImage: require("../assets/imgs/service/service_img05_mo.png").default,
      detailTitle: "운영 및 관리 세부 오퍼링",
      detail: [
        {
          icon: require("../assets/imgs/service//icon/list_5-1.svg").default,
          name: "Cloud Managed Services",
          lead: "클라우드의 변화에 맞게 최신화/ |최적화를 수행하여 Application 관리 및 |보안 솔루션 관리/운영까지 통합 제공",
        },
        {
          icon: require("../assets/imgs/service//icon/list_5-2.svg").default,
          name: "FinOps Clinic",
          lead: "고객 맞춤형 비용 모니터링 정보를 |제공하고, 전문가 및 플랫폼 기반 |실행 중심의 비용 최적화 활동 지원",
        },
        {
          icon: require("../assets/imgs/service//icon/list_5-3.svg").default,
          name: "Security Enhancement",
          lead: "클라우드 보안 솔루션 및 장비 |운영으로 지속적인 모니터링과 위험 사전 분석",
        },
        {
          icon: require("../assets/imgs/service//icon/list_5-4.svg").default,
          name: "Well-Architect Review",
          lead: "전문가의 정확한 진단으로 안전하고 |효율적인 클라우드 아키텍처 개선 및 운영 통합 서비스",
        },
      ],
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (rightContentRef.current) {
      gsap.fromTo(rightContentRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }
  }, [activeIndex]);

  return (
    <div className="servicePage">
      <Page header={<NavBar />} aside={<AsideNav />} footer={<Footer />}>
        <section id="serviceVisualWrap">
          <strong>Services & Offerings</strong>
        </section>
        <section id="serviceContent1">
          <hgroup>
            <p>
              디지털 혁신의 <br />
              모든 여정을 함께 합니다
            </p>
            <sub>
              클라우드 도입을 위한 진단부터 전환과 설계, 구축 및 운영까지 클라우드 모든 여정을 함께하며 <br />
              비즈니스 연결성과 효율성을 높이고, 신속하고 유연한 서비스로 보다 나은 고객 경험을 최우선으로 합니다.
            </sub>
          </hgroup>
          <div className="videoWrap">
            <video src="/assets/video/lgcns_service_offering.mp4" autoPlay muted loop playsInline></video>
          </div>
        </section>
        <section id="serviceContent2">
          <ul className="left">
            {services.map((service, index) => (
              <li key={index} className={index === activeIndex ? "is_active" : ""} onClick={() => handleClick(index)}>
                <p>
                  <span>
                    <mark>{`0${index + 1}`}</mark>
                    {service.navTitle}
                  </span>
                  <sub>{service.navSubTitle}</sub>
                </p>
              </li>
            ))}
          </ul>
          <div className="right" ref={rightContentRef}>
            <span className="title">{services[activeIndex].title}</span>
            <p className="description">{services[activeIndex].description}</p>
            <img src={services[activeIndex].image} alt="" className="pc" />
            <img src={services[activeIndex].mobileImage} alt="" className="mo" />

            <ul className={services[activeIndex].detail.length > 3 ? "quarter" : ""}>
              <sub>{services[activeIndex].detailTitle}</sub>
              {services[activeIndex].detail.map((detail) => (
                <li>
                  <img src={detail.icon} alt="" />
                  <span>{detail.name}</span>
                  <p>
                    {detail.lead.split("|").map((text, i) => (
                      <React.Fragment key={i}>
                        {text}
                        {i < detail.lead.split("|").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Page>
    </div>
  );
};

export default ServicePage;
