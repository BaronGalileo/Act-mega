import React from "react";
import "./styles.css"
import { useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"


export const Book = () => {

    const isAuth = useSelector(state => state.auth)

    return(
        <div className="book">
            <div className="item" >
                <Cover/>
            </div>
            <div className="item" >
               <BookPresentation/> 
            </div>
            <div className="item" >
                3D-книга
            </div>
            <div className="item" >
                Отзывы
            </div>
            <div className="item" >
                Каталог
            </div>
            <div className="item" >
                Оглавление
            </div>
            {isAuth.isAuth && 
            <div className="item" >
                Админ страница
            </div>}
        </div>
    )
}