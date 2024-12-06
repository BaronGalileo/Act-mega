import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import './styles.css';
import { removeAuth } from '../../store/authSlice';
import { Img } from '../Img/Img';




export const Header = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

    const del = () => {
        dispatch(removeAuth())
    }


    return(
        <>
        <Img className="logo" src="../images/image 3.png"/>
        <Img className="logo" src="../images/Лого Поп ап-01 1.png"/>
        {/* <Button onClick={del}>Выйти из АДМИНА</Button> */}
        </>
            // <div className='header-wrapper'>
            //     <div className='header-cap'>
            //         <Button onClick={del}>Выйти из АДМИНА</Button>
            //         <Img className="logo" src="../images/image 3.png"/>
            //         <Img className="logo" src="../images/Лого Поп ап-01 1.png"/>
            //         <Text as='h1'>Электронная сервисная книжка "Мой Силант"</Text>                 
            //     </div>
            // </div>
    )
}
