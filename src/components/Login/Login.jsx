import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice"
import { Input } from "../Input/Input";
import {  useFormContext } from "react-hook-form";
import './styles.css'





function Login() {

    const isAuth = useSelector(state => state.auth)

    // useEffect(() => {
    //     if(isAuth.confermAut){
    //         axios.get(pach_user_role, isAuth.confermAut)
    //         .then(res => {
    //             res.data.roles.map(val => {
    //                 if(val[0]){
    //                     const accountAdd = {
    //                         name: val[0]?.name,
    //                         username: isAuth.username,
    //                         confermAut : isAuth.confermAut,
    //                         user_role: val[0]?.role,
    //                         auth_token: isAuth.auth_token,
    //                     }
    //                     return dispatch(setAuth(accountAdd))
    //                 }
    //                 return null
    //             })
    //         })
    //     }
    // }, [isAuth])

    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()
  

    const dispatch = useDispatch();

    // const path = "http://127.0.0.1:8000/auth/token/login/"

    // const pach_user_role = "http://127.0.0.1:8000/users/role/"


    


    const onSubmit = (data) => {
        console.log("data",data)
        const accountAdd = {
            username: data.username,
            }
            return dispatch(setAuth(accountAdd))


        // axios.post(path, data)
        // .then(res => {
        //     const account = {
        //         username: data.username,
        //         auth_token: res.data.auth_token,
        //         confermAut : {headers: {"Authorization" : `Token ${res.data.auth_token}`}},               
        //         ...res.data}
        //     dispatch(setAuth(account))
        //     reset()
        
        // })
        // .catch(err => {
        //     if(err.request.status === 401){
        //         alert("Вы ошиблись! Проверьте Логин и Пароль");
        //         reset()
        //     }
        //     else if(err.request.status >= 500) {
        //         alert("Извените, проблема с сервером, попробуйте зайти позже!");
        //         reset()
        //     }

        // })
    }

    const show = () => {
        console.log("user", isAuth)
    }


    if(isAuth.isAuth) return <Navigate to="/"/>
    

    return (
        <>
        <div className="conteyner_form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="username" message="Обязательно заполнить!">Логин:</Input>
                <Input name="password" type="password" message="Обязательно заполнить!">Пароль:</Input>
                <Button  disabled={!isValid}>Войти</Button>
            </form>
            <Button onClick={show} >показать</Button>
        </div>
        </>
    )
}
export {Login}