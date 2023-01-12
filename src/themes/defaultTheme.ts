 export interface Theme {
      colors: {
          white: string;
          lightgray: string;
          gray: string;
          darknavy: string;
          blue: string;
          blueshade: string;
      };
      background: string;
        fonts: {
        primary: string;
      }
    }
    export const defaultTheme: Theme= {
        colors: {
          white: "#FFFFFF",
          lightgray: "#D5E1EF",
          gray: "#7D889E",
          darknavy: "#1F314F",
          blue: "#2C7DFA",
          blueshade: "#3685FF",
        },
        background: "7D889E",
        fonts: {
          primary: "Space Mono"
          
        }
      };
      