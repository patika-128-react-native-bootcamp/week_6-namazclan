import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (state, action) {
    switch (action.type) {
        case 'SET_LANGUAGE':
            AsyncStorage.setItem("@LANGUAGE", JSON.stringify(action.payload.language))
            return { ...state, language: action.payload.language }
        case 'SET_THEME':
            AsyncStorage.setItem("@THEME", JSON.stringify(action.payload.theme))
            return { ...state, theme: action.payload.theme }
        
        default:
            return state;
    }
};