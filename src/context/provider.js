import React,{useEffect} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const userProvider = ({ children }) => {
    const [language, setLanguage] = React.useState("en");
    const [theme, setTheme] = React.useState("light");

    useEffect(() => {
        AsyncStorage.getItem("@LANGUAGE").then(l => {
            l && setLanguage(JSON.parse(l))
        })
        AsyncStorage.getItem("@THEME").then(t => {
            t && setLanguage(JSON.parse(t))
        })
    },[])


    const stores = createStore(reducer, {language, theme})
    return (
        <Provider store={stores}>
            {children}
        </Provider>
    )
};

export default userProvider;