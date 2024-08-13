import React from 'react';
import companyLogo from '../assets/imgs/nav/logo.png';
import arrowLink from '../assets/imgs/newsEvent/arrow.png';

const Footer = () => {

    return(
      <div className="footerWrapper">
         <div className="footerLogo" style={{backgroundImage : `url(${companyLogo})`}}></div>
         <div className="footerTextContents">
             <ul>
                <li><address>서울시 강서구 마곡중앙8로 71 LG 사이언스파크 E13, E14</address></li>
                <li><p>Contact Us<span>cloud.marketing@lgcns.com</span></p></li>
             </ul>
             <ul className="copyInfo">
                <li><p>Copyright&copy;LG CNS. All Rights Reserved.</p></li>
                <li><a href="#" style={{backgroundImage : `url(${arrowLink})`}}>LG CNS 바로가기</a></li>
             </ul>
         </div>
      </div>
    )
}

export default Footer;