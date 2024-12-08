import React from "react";
import './styles.css'
import { Text } from '../Text/Text'
import { CardsBook } from '../CardsBook/CardsBook'


export const Catalog = () => {

    return(
        <div className="catalog-wrapper">
            <Text as='h1'className="red-text bond">Каталог</Text>
            <div className="catalog-element">
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
                <CardsBook link="https://ast.ru/" src="../images/Обложки/Алиса в зазеркаье.jpg" title="Название Книги" contex="Описание книги"/>
            </div>
            
        </div>
    )
}