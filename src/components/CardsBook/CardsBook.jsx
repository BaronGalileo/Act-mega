import React from "react";
import './styles.css'
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { BallonButton } from "../Button/BallonButton";


export const CardsBook = ({src='', link="", title="", contex="" }) => {

    return(
        <div className="cards-book-wrapper">
            <div className="cards-book-element">
                <div className="frame-book">
                    <Img className="cardsBook-img" src={src}/>
                </div>
                {/* <Img className="cardsBook-img" src={src}/> */}
                <div className="frame-book"></div>
                <div className="umbrella"></div>
            </div>
            <div className="cards-book-element ">
                <Text  className="bond title-book">{title}</Text>
                <Text className="bond title-book">{contex}</Text>
                {/* <Text className="book-text">{contex}</Text> */}
                <BallonButton href={link} clean className="candy-balloon">Хочу</BallonButton>
            </div>
        </div>
    )
}