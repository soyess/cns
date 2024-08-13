import React from 'react';
import Page from '../components/Page.jsx';
import NavBar from '../components/Nav.jsx';
import AsideNav from '../components/Aside.jsx';

const MainPage = () => {

    return(
      <div className="mainPage">
        <Page header={<NavBar/>}
         aside={<AsideNav />}>
       
        </Page>
      </div>
    )
}

export default MainPage