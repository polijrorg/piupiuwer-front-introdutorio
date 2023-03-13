/* eslint-disable no-shadow */
import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: "Poppins Regular";
        src: url("/fonts/Poppins/Poppins-Regular.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins Bold";
        src: url("/fonts/Poppins/Poppins-Bold.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins SemiBold";
        src: url("/fonts/Poppins/Poppins-SemiBold.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins Medium";
        src: url("/fonts/Poppins/Poppins-Medium.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins ExtraLight";
        src: url("/fonts/Poppins/Poppins-ExtraLight.ttf") format('truetype');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &::-webkit-scrollbar {
            /* width */
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            /* Track */
            box-shadow: inset 0 0 5px grey;
            border-radius: 8px;
        }

        &::-webkit-scrollbar-thumb {
            /* Handle */
            background: ${({ theme }) =>
                (theme as typeof defaultTheme).colors.sky5};
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            /* Handle on hover */
            background: ${({ theme }) =>
                (theme as typeof defaultTheme).colors.sky6};
        }

        &::-webkit-scrollbar-track-piece {
            /* not handle on */
            background: ${({ theme }) =>
                (theme as typeof defaultTheme).colors.sky1};
        }
    }

    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;

    }
`;
