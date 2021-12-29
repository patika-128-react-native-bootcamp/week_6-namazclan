import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (state, action) {
    switch (action.type) {
        case 'SET_LANGUAGE':
            AsyncStorage.setItem("@LANGUAGE", JSON.stringify(action.payload.language))
            return { ...state, language: action.payload.language }
        case 'SET_THEME':
            AsyncStorage.setItem("@THEME", JSON.stringify(action.payload.theme))
            return { ...state, theme: action.payload.theme }
        case 'ADD_FAVORITE_COMIC':
            AsyncStorage.setItem("@COMIC", JSON.stringify(action.payload.comic))
            return { ...state, comic: action.payload.comic }
        case 'ADD_FAVORITE_HERO':
            AsyncStorage.setItem("@HERO", JSON.stringify(action.payload.hero))
            return { ...state, hero: action.payload.hero }
        case 'DEL_FAVORITE_COMIC':
            AsyncStorage.setItem("@COMIC", JSON.stringify(action.payload.comic))
            return { ...state, comic: action.payload.comic }
        case 'DEL_FAVORITE_HERO':
            AsyncStorage.setItem("@HERO", JSON.stringify(action.payload.hero))
            return { ...state, hero: action.payload.hero }
        
        default:
            return state;
    }
};