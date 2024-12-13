import React from "react";
import { Button } from "../Button/Button";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { motion } from 'framer-motion';
import './styles.css';
import { BallonButton } from "../Button/BallonButton";
import GifComponent from "../Test/GifCompon";


export const Cover = () => {

    return(
        <div className="cover-wrapper">
            <Text className="red-text bond cover-txt for-h1" >САМАЯ УДИВИТЕЛЬНАЯ КНИГА С ОБЪЕМНЫМИ КАРТИНКАМИ</Text>
            <BallonButton href="https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC">Погрузись в чудо</BallonButton>
            <div className="conteiners-images">
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '-4%',            
                left: '3%',
                // filter: 'blur(1px)',
                zIndex: 0,          
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}
                >
                    <Img className="tree two" src="../images/дерево 2 л.png"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '-30%',            
                right: '0',
                zIndex: 1,
                overflowY: 'visible',         
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 3 }}>
                    <Img className="tree one" src="../images/дерево 1 л.png"/>
                </motion.div>
                <GifComponent/>
                {/* <Img  className="squirrel-img" src="../images/png-clipart.png"></Img> */}
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute',  
                top: '-57%',                  
                left: '-1vw',                
                width: 'auto',               
                height: 'auto',              
                zIndex: 2,
                overflowY: 'visible',         
                }}
                initial={{ y: '100%',
                    opacity: 0, 
                    scale: 0 }}            
                animate={{ y: '0%',
                    opacity: 1, 
                    scale: 1,
                 }}         
                transition={{ duration: 3 }}>
                    <Img className="rabbit-book" src="../images/книга+буратино+кролик.png"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute', 
                bottom: '-27%',            
                right: '-5%',
                zIndex: 1,          
                }}
                initial={{ x: '-20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}>
                    <Img className="tree three" src="../images/дерево 1 п.png"/>
                </motion.div>
                </div>
                <div className="conteiner-image">
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '-17%',            
                right: '0%',
                filter: 'blur(1px)',
                zIndex: 0,
                // overflowX: 'hidden',           
                overflowY: 'visible',          
                }}
                initial={{ x: '-20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 3 }} 
                >
                    <Img className="blur four" src="../images/дерево d.png"/>
                </motion.div>
                </div>

            </div>
    </div>

    )
}