import React, { useState } from 'react'

export const LoginState = {
    onLogin: function name(params) {

    },
    isLoggedIn: true
}

export const GolablContext = React.createContext(LoginState);