import React from "react";
import './styles.css'
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../store/authSlice";
import { Text } from "../Text/Text";
import { FormAdmin } from "../FormAdmin/FormAdmin";


export const AdminPanel = () => {

    const dispatch = useDispatch();

    const del = () => {
        dispatch(removeAuth())

    }

    return(
        <div className="admin-wrapper">
            <Text className="red-text" as='h2'>Админ понель</Text>
            <FormAdmin/>
            <Button onClick={del}>Выйти из админка</Button>
        </div>
    )
}