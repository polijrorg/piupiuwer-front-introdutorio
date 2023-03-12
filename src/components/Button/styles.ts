import styled from 'styled-components';

interface ButtonStyledProps {
    disabled: boolean;
}

export const Wrapper = styled.button<ButtonStyledProps>`
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;

    border-radius: 16px;
    width: 114px;
    height: 48px;
    background-color: ${({ theme, disabled }) =>
        disabled ? theme.colors.onSurface.lowEmphasis : theme.colors.sky11};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins Bold', sans-serif;
    font-size: 20px;

    &:hover {
        background-color: ${({ theme, disabled }) =>
            !disabled && theme.colors.sky10};
    }
`;
