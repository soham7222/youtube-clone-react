import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigation = useNavigate()

    return (
        <div>
            <button onClick={() => {
                navigation("/dashboard")
            }}>Seach</button>
            <button onClick={() => {
                navigation("/login")
            }}>Login</button>
        </div>
    )
}
