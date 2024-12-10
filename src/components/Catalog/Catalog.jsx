import React, { useEffect, useRef, useState } from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'
import { Img } from "../Img/Img";


export const Catalog = () => {

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); 
    const [contentHeight, setContentHeight] = useState(412); 

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); 
    }
  }, []); 

  const toggleContent = () => {
    const show = document.querySelector(".item-catalog");
    if(!isOpen) {
        show.style.height=`${contentHeight + 200}px`
    }
    else show.style.height=`${90}vh`
    setIsOpen(!isOpen);
  };

    return(
        <div className="catalog-wrapper">
            <Text as='h1'className="red-text bond">Каталог</Text>
            <div className="catalog-element" ref={contentRef}
            style={{
                height: isOpen ? `${contentHeight}px` : "412px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="hgsajhdgasgclkjsbckjqgsjkcjbkjbcs;lkjbs;clkbc"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
            </div>
            <button id="toggleButton" className='btn-catalog-more'
                onClick={toggleContent}
            >
                {isOpen ? <Img src='../images/not-select-grin.png'/> : <Img src='../images/select-grin.png'/>}
            </button>
            
        </div>
    )
}