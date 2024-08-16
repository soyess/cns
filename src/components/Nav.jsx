import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imgs/nav/logo.png';
import laguageImg from '../assets/imgs/nav/language.png';
import navDB from '../json/Nav.json';

const NavBar = ({ paths }) => {

   const [ hrefPaths, setHrefPaths ] = useState();
   const [ selectedLanguage, setSelectedLanguage] = useState("KR");

   const selectValues = [ "KR" , "EN" , "JP"];


   const handleSelectClick = (e) => {
       const thisTarget = e.target.innerText;      
       if(thisTarget){ 
         setSelectedLanguage(thisTarget);
      }
}
  

   useEffect(() => {

      const valuesEvet = () => {
       
         const selectBoxs = document.getElementById("languageSelectBox"); //셀렉박스
         selectBoxs.value = selectedLanguage;
         console.log('selectBoxValue' , selectBoxs.value)
      }

             
      if(hrefPaths === undefined || paths === undefined){
         paths = '/';
         return setHrefPaths(paths),
         valuesEvet();
      }
         setHrefPaths(paths);
         console.log(paths, 'NavBar');
         valuesEvet();
   

   }, [hrefPaths , selectedLanguage])


  return (
    <nav className="navBar">
      <div className="logoBoxs">
         <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <ul className="navLists">
       { navDB.category.map((v,i) => (
         <li key={'nav' + i}><Link to={v.href} className={ hrefPaths ? (hrefPaths === v.href ? "active" : "") : ""}>{v.title}</Link></li>
       ))}
      </ul>
         <div className="languageSelectWrappers">
            <select className="languageHiddenSelect" id="languageSelectBox" hidden >
                <option value="KR">KR</option>
                <option value="EN">EN</option>
                <option value="JP">JP</option>
            </select>
         </div>
            <div className="languageSelects">
            <div className="languageSelectList">
               <ul className="languageSelectListMember">
                     <li>
                        <p onClick={handleSelectClick} style={{backgroundImage:`url(${laguageImg})`}}>{selectedLanguage}</p>
                     </li>
                     {selectValues.filter(value => value !== selectedLanguage).map((value, index) => (
                        <li key={index}>
                            <p onClick={handleSelectClick} style={{backgroundImage:`url(${laguageImg})`}}>{value}</p>
                        </li>
                    ))}
               </ul>
            </div>
            </div>
    </nav>
  );
};


export default NavBar;