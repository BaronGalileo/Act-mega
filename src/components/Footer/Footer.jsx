import React from 'react';
import './styles.css'
import { Img } from '../Img/Img';


export const Footer = () => {
    return(
            <div className='footer-wrapper'>
                <a  href="#top">
                    <Img className="img-link" src="../../images/teleg.png" alt="Описание картинки"/>
                </a>
                <a href="#top">
                    <Img className="img-link" src="../../images/youtube.png" alt="Описание картинки"/>
                </a>
                <a href="#top">
                    <Img className="img-link" src="../../images/vk.png" alt="Описание картинки"/>
                </a>
            </div>
    )
}
