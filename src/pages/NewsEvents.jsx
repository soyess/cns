import React  from 'react';
import { useLocation , Link } from 'react-router-dom';
import Page  from '../components/Page.jsx';
import NavBar from '../components/Nav.jsx';
import AsideNav from '../components/Aside.jsx';
import newestImg from '../assets/imgs/newsEvent/newest.png';
import filterImg from '../assets/imgs/newsEvent/filter.png';
import newsEventDB from '../json/pages/NewsEvent.json';
import Footer from '../components/Footer.jsx';
import FixedButton from '../components/FixedButton.jsx';

const NewsEvents = () => {
   const { pathname } = useLocation();


   return(
       
      <div id="newsEvents">
      <Page header={<NavBar paths={pathname}/>}
          aside={<AsideNav pathName={pathname}/>}
          footer={<Footer/>}>
             <div className="newsEventsMain">
                 <div className="newsEventsTitleboxs">
                   <h5>News & Events</h5>
                 </div>
                 <section className="newsEventContents">
                     <div className="categoryBoxies">
                         <ul className="categorys">
                           <span className="filterList" style={{backgroundImage : `url(${filterImg})`}}></span>
                           { newsEventDB.category.map((v,i) => (
                              <li key={'category' + i}><button>{v}</button></li>
                           ))}
                         </ul>
                        <div className="subCategoryBoxies">
                           <ul className="subCategory">
                              <li><button>News</button></li>
                              <li><button>Events</button></li>
                           </ul>
                         </div>
                     </div>
                     <div className="newsEventResultBoxies">
                         <div className="resultCount">
                            <h3><span>13</span>개의 검색결과</h3>
                            <button style={{ backgroundImage: `url(${newestImg})`}}>최신순</button>
                         </div>
                         <div className="resultDatas">
                           {newsEventDB.contents.map((v, i) => (
                              <ul key={'datas'+i}>
                                 <Link to={`/newsEvent/:details${v.id}`}>
                                 <li>
                                    <div className="imgBoxs"><img src={'./assets/imgs/newsEvent/'+v.img} alt={'dataImg'+ i} /></div>
                                    <div className="titleBoxs">
                                       <p>{v.company}</p><span>{v.dates}</span>
                                    </div>
                                    <h2>{v.title}</h2>
                              </li>
                              </Link> 
                           </ul>
                           ))}
                         </div>
                     </div>
                 </section>
              </div>
          </Page>
         <FixedButton />
      </div>
   )
    
}

export default NewsEvents;