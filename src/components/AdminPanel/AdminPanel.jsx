import React from "react";
import './styles.css'
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../store/authSlice";


export const AdminPanel = () => {

    const dispatch = useDispatch();

    const del = () => {
        dispatch(removeAuth())

    }

    return(
        <div className="admin-wrapper">
            <Button onClick={del}>Выйти из админка</Button>
        </div>
    )
}