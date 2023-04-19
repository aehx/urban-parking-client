export type themeContextProviderType = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme:LightTheme | DarkTheme,
  updateTheme:(newTheme:string) => void
}

export interface LightTheme {
    primary: {
      color: string;
    };
    secondary: {
      color: string;
    };
    background: {
      backgroundColor: string;
    };
    imageBackground: any;
    authColor: {
      primary: {
        color: string;
      };
      secondary: {
        color: string;
      };
      tertiary: {
        color: string;
      };
      buttonBackground: {
        backgroundColor: string;
      };
      inputBorder: {
        borderBottomColor: string;
      };
    };
    mapInput: {
      backgroundColor: string;
    };
    popUp: {
      primary: {
        backgroundColor: string;
      };
      icon: {
        color: string;
      };
    };
    flatList: {
      backgroundColor: string;
    };
  }

export interface DarkTheme {
  primary: {
    color: string;
  };
  secondary: {
    color: string;
  };
  background: {
    backgroundColor: string;
  };
  imageBackground: string;
  authColor: {
    primary: {
      color: string;
    };
    secondary: {
      color: string;
    };
    tertiary: {
      color: string;
    };
    buttonBackground: {
      backgroundColor: string;
    };
    inputBorder: {
      borderBottomColor: string;
    };
  };
  mapInput: {
    backgroundColor: string;
  };
  popUp: {
    primary: {
      backgroundColor: string;
    };
    icon: {
      color: string;
    };
  };
  flatList: {
    backgroundColor: string;
  };
}

export type AppTheme =  {
  lightTheme:LightTheme,
  darkTheme:DarkTheme
  }

