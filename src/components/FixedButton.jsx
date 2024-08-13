import React ,{ useState, useEffect } from 'react';
import talkImg from '../assets/imgs/fixedButton/talk.png';
import topImg from '../assets/imgs/fixedButton/arrowUp.png';

const FixedButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
  
    }  
    useEffect(() => {

        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
           window.addEventListener("scroll", handleShowButton)
           return () => {
               window.removeEventListener("scroll", handleShowButton)
           }

    })
  
     return(
         <div className="fixedButton">
            <button className="talkBtn" style={{backgroundImage : `url(${talkImg})`}}></button>
            <button className="topBtn"  style={{backgroundImage : `url(${topImg})`}} onClick={e => scrollToTop()}></button>
         </div>
     )
}

export default FixedButton;