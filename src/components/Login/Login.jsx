import React, { useState } from 'react'
import { GolablContext } from '../../context/context'
import { PASSWORD, USER_NAME } from '../../assets/creds/API_KEY'

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const loginStatus = React.useContext(GolablContext)
    const { login, setLogin } = loginStatus

    const onLoginClick = () => {
        if (userName === USER_NAME) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }

    return (
        <>
            <div>
                <label>User Name</label>
                <input onChange={(e) => {
                    console.log()
                    setUserName(e.target.value)
                }}></input>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(e.target.value)
                }}></input>
            </div >
            <button onClick={onLoginClick}>Login</button>
        </>
    )
}
