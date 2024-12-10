import React from "react";
import { Button } from "../Button/Button";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
import { motion } from 'framer-motion';
import './styles.css';
import { BallonButton } from "../Button/BallonButton";


export const Cover = () => {

    return(
        <div className="cover-wrapper">
            <Text className="red-text bond" as="h1">Самая удивительная книга c объёмными картинками</Text>
            <BallonButton href="https://ast.ru/series/samaya-udivitelnaya-kniga-s-obemnymi-kartinkami-7e485f/?SORT=NEW_SORT&SORT_BY=DESC">Погрузись в чудо</BallonButton>

            <div className="conteiner-images">
                <motion.div
                style={{
                position: 'absolute',  
                top: '1%',                  
                left: '33%',                
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
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '1%',            
                left: '2%',
                zIndex: 1,
                overflowY: 'visible',         
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 3 }}>
                    <Img className="tree one" src="../images/дерево 1 л.png"/>
                </motion.div>
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '4%',            
                left: '-10%',
                filter: 'blur(2px)',
                zIndex: 0,          
                }}
                initial={{ x: '20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}
                >
                    <Img className="tree two" src="../images/дерево 1 л.png"/>
                </motion.div>
                <motion.div
                style={{
                position: 'absolute', 
                bottom: '1%',            
                right: '2%',
                zIndex: 1,          
                }}
                initial={{ x: '-20%' }}            
                animate={{ x: '0%' }}         
                transition={{ duration: 2 }}>
                    <Img className="tree three" src="../images/дерево 1 п.png"/>
                </motion.div>
                <motion.div
                style={{
                position: 'absolute',  
                bottom: '4%',            
                right: '0%',
                filter: 'blur(2px)',
                zIndex: 0,
                overflowX: 'hidden',           
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

    )
}