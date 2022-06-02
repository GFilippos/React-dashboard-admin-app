import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    //smaller devices usestate
    const [screenSize, setScreenSize] = useState(undefined)


    // Navbar isclicked function to use its state
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true});
    } 

    return (
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);