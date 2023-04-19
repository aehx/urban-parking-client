import { createContext, useEffect, useState } from "react";
import { StatusBar } from "react-native"
import { ThemeContextType, themeContextProviderType } from "../typescript/context/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext({} as ThemeContextType)

export const ThemeProvider = ({children}:themeContextProviderType)=>{
  const [userTheme,setUserTheme] = useState<string>("light");
  
  StatusBar.setBarStyle(`${userTheme === "light" ? "dark" : "light"}-content`as "dark-content" | "light-content")

  const appTheme = {
    lightTheme : {
      primary :{
        color : "#000"
      },
      secondary:{
        color:"#2795AA"
      },
      background:{
        backgroundColor:"#fff"
      },
      imageBackground:require("../assets/backgroundLight.jpg"),
      authColor:{
        primary:{
          color:"#058"
        },
        secondary:{
          color:"#2795AA"
        },
        tertiary:{
          color:"#06a",
        },
        buttonBackground:{
          backgroundColor:"#2795AA"
        },
        inputBorder:{
          borderBottomColor:"#000"
        },
      },
      mapInput:{
        backgroundColor: "#fff",
      },
      popUp:{
        primary:{
          backgroundColor:"#fff"
        },
        icon:{
          color:"#000"
        }
      },
      flatList:{
        backgroundColor:"#bbb"
      }
   },
    darkTheme : {
      primary :{
        color : "#ddd"
      },
      secondary:{
        color:"#2795FF"
      },
      background:{
        backgroundColor:"#0B131D"
      },
      imageBackground:require("../assets/background.jpg"),
      authColor:{
        primary:{
          color:"#cccccc9c"
        },
        secondary:{
          color:"#2795FF"
        },
        tertiary:{
          color:"#666",
        },
        buttonBackground:{
          backgroundColor:"#2795FF"
        },
        inputBorder:{
          borderBottomColor:"#ccc"
        },
      },
      mapInput:{
        backgroundColor: "#0000009f",
      },
      popUp:{
        primary:{
          backgroundColor:"#0B131Dee"
        },
        icon:{
          color:"#0B131Dee"
        }
      },
      flatList:{
        backgroundColor:"#000"
      }
   }
  }

  async function getUserTheme(){
    const themeInStorage = await AsyncStorage.getItem("theme")
    if(!themeInStorage){
      await AsyncStorage.setItem("theme","light")
      StatusBar.setBarStyle(`light-content`)
      setUserTheme("light");
    }
    setUserTheme(themeInStorage as string)
  }
  
  useEffect(()=>{
    getUserTheme()
  },[])
  

  const theme = userTheme === "light" ? appTheme.lightTheme : appTheme.darkTheme;
  const updateTheme = async ()=>{
    const switchTheme = userTheme === "light" ? "dark" : "light";
    await AsyncStorage.setItem("theme",switchTheme)
    setUserTheme(switchTheme);
  }
  return (
    <ThemeContext.Provider value={{theme,updateTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
