import React from "react";
import { Button } from "../Button/Button";
import { Img } from "../Img/Img";
import { Text } from "../Text/Text";
// import { motion } from 'framer-motion';
import './styles.css';
import { BallonButton } from "../Button/BallonButton";


export const Cover = () => {

    return(
        <div className="cover-wrapper">
            <Text className="red-text" as="h1">Самая удивительная книга c объёмными картинками</Text>
            <BallonButton>Погрузись</BallonButton>

            <div className="conteiner-images">
                <Img className="left-tree-foreground" src="../images/дерево 1 л.png"/>
                <Img className="left-tree-background" src="../images/дерево 1 л.png"/>
                <Img className="right-tree-foreground" src="../images/дерево 1 п.png"/>
                <Img className="right-tree-background" src="../images/дерево 1 п.png"/>
            </div>



                {/* <Button>Хочу</Button> */}

            {/* <motion.div
                initial={{ opacity: 0, x: -100 }} // Начальное состояние (невидимый и сдвинутый влево)
                animate={{ opacity: 1, x: 0 }}    // Конечное состояние (полностью видимый и на месте)
                transition={{ duration: 0.8 }}    // Время анимации
            >
            <h2>Сдвигающаяся и исчезающая анимация</h2>
            <p>Этот элемент плавно появляется и перемещается.</p>
            </motion.div>
            <motion.div
      whileHover={{ scale: 1.1 }} // Элемент увеличится на 10% при наведении
      whileTap={{ scale: 0.9 }}   // Элемент уменьшится при клике
      transition={{ type: "spring", stiffness: 1000 }} // Настроить упругость анимации
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#ff6347",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "18px",
        borderRadius: "10px"
      }}
    >
      Наведи на меня!
    </motion.div>
    <motion.div
      animate={{
        x: [0, 100, 0, -100, 0], // Ключевые кадры по оси X
        rotate: [0, 360],          // Ключевые кадры по вращению
      }}
      transition={{
        duration: 2,
        repeat: Infinity,          // Повторить анимацию бесконечно
        repeatType: 'loop',        // Цикличность (повторять)
      }}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "skyblue",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      Анимация с ключевыми кадрами
    </motion.div> */}
    </div>

    )
}