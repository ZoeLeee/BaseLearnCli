import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      layoutBodyBackground: string;
      headingColor: string;
      textColorSecondary: string;
      success: string;
      warning: string;
      error: string;
      primary: string;
      textColor: string;
    };
    fontSizes: {
      base: number;
    };
  }
}
