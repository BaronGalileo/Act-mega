import React from "react";
import './styles.css'
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { BallonButton } from "../Button/BallonButton";


export const CardsBook = ({src='', link="", title="", contex="" }) => {

    return(
        <div className="cards-book-wrapper">
            <div className="cards-book-element">
                <Img className="cardsBook-img" src={src}/>
            </div>
            <div className="cards-book-element">
                <Text className="bond">{title}</Text>
                <Text className="book-text">{contex}</Text>
                <BallonButton href={link} clean className="candy-balloon">Кнопка</BallonButton>
            </div>
        </div>
    )
}