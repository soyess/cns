import React , { useState, useEffect } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import Page from './Page.jsx';
import NavBar from './Nav.jsx';
import AsideNav from './Aside.jsx';
import Footer from './Footer.jsx';
import newsEventDB from '../json/pages/NewsEvent.json';
import FixedButton from './FixedButton.jsx';
import arrowLeft from '../assets/imgs/newsDetails/arrowLeft.png';
import linkImg from '../assets/imgs/newsDetails/link.png';

const NewsDetails = () => {
   const [titles, setTitles] = useState();
   const [company, setCompany] = useState();
   const [dates, setDates] = useState();
   const [imgs, setImgs] = useState();

   const navigate = useNavigate();
   const { pathname } = useLocation();
   const goBackEvet = () => {

      navigate(-1);
   }

   useEffect(() => {
       
      console.log(pathname);
      const stringChange = () => {
       
         if(pathname){
            const str = pathname.slice(pathname.length - 2);
            const insertDatas = newsEventDB.contents.map((v) => {
               if(v.id === str){
                  setTitles(v.title);
                  setCompany(v.company);
                  setDates(v.dates);
                  setImgs(v.img);
               }
            })
            
         }
      }
      stringChange();
      window.scrollTo(0, 0);

   },[titles, company, dates])

     return(
      <div id="newsDetailsWrapper">
        <Page header={<NavBar paths={'/newsEvent'}/>}
        aside={<AsideNav paths={'/newsEvent'}/>}
        footer={<Footer/>}>
          <div className="dataInfoWrapper">
             <div className="closeBtns">
                 <button onClick={goBackEvet} style={{backgroundImage : `url(${arrowLeft})`}}>All News & Events</button>
             </div>
             <div className="dataInfoContents">
                <div className="dataInfoTexts">
                    <h2>{titles}</h2>
                    <p>{company}</p><span>{dates}</span>
                 </div>
                 <div className="dataInfoBoxies">
                    <ul>
                         <li className="imgBoxs"><img src={'../assets/imgs/newsEvent/'+imgs} alt={imgs} /></li>
                         <li>
                             <div className="textBoxs">
                                <textarea readOnly value={`5월 23일 LG사이언스파크 ISC 5층 컨버전스홀에서 Google Cloud Innovation Day for LG Group 행사가 개최되었습니다.
임직원 500명 이상이 참여한 뜨거웠던 현장을 소개합니다!
이번 행사에서는 지기성님(Country Director of Google Cloud)의 환영사와 김경전님(Customer Engineering Manager of Google Cloud)의 Next '24 오프닝 키노트를 시작으로, 범용 AI 모델 Gemini 소개, AI를 최적화하는 방법, 데이터 분석 및 AI 트렌드, Gemini를 통한 Google Workspace 활용, 엔터프라이즈 데이터베이스 혁신, EDW Modernization 사례, 그리고 AI 시대의 보안에 대한 다양한 세션이 진행되었습니다.
행사에 참여한 임직원들은 AI 기술을 활용한 미래 사업 전략에 대해 서로 토론하고 소통하며 세션에 적극적으로 참여하였습니다.`}>
                                </textarea>
                             </div>
                             <a href="" style={{backgroundImage : `url(${linkImg})`}}>자세히보기</a>
                         </li>
                    </ul>
                 </div>
             </div>
             <div className="closeBtns">
                 <button onClick={goBackEvet} style={{backgroundImage : `url(${arrowLeft})`}}>All News & Events</button>
             </div>
          </div>
          </Page>
          <FixedButton />
          </div>
     )
}

export default  NewsDetails;