import React from "react";
import "./styles.css"
import { useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"
import { Reviews } from "../../components/Reviews/Reviews";
import { Slider } from "../../components/Slider/Slider";

import { TestSlider} from '../../components/Test/TestSlider'
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { CardsBook } from "../../components/CardsBook/CardsBook";
import { Catalog } from "../../components/Catalog/Catalog";


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
                {/* <Slider/> */}
            </div>
            <div className="item" >
                {/* <Reviews/> */}
            </div>
            <div className="item" >
                <Catalog/>
            </div>
            <div className="item" >
                Оглавление
            </div>
            {isAuth.isAuth && 
            <div className="item" >
                Админ страница
                <AdminPanel/>
            </div>}
        </div>
    )
}