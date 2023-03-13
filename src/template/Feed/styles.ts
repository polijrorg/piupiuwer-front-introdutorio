import styled from 'styled-components';
import Image from 'next/image';

export const Title = styled.h1`
    font-family: 'Poppins Regular';
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.sky1};
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: fixed;
        top: 22%;
        left: -10%;
        width: 750px;
        height: 750px;
        border-radius: 50%;
        background: radial-gradient(rgba(0, 93, 133, 0.3), transparent 75%);
        filter: blur(50px);
        -webkit-filter: blur(50px);
        z-index: 0;
    }

    &::after {
        content: '';
        position: fixed;
        top: 60%;
        right: -12%;
        width: 514px;
        height: 514px;
        border-radius: 50%;
        background: radial-gradient(rgba(0, 93, 133, 0.3), transparent 75%);
        filter: blur(50px);
        -webkit-filter: blur(50px);
        z-index: 0;
    }
`;

export const SearchBarWrapper = styled.div`
    width: 760px;

    border-radius: 32px;

    background-color: ${({ theme }) => theme.colors.sky5};

    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    gap: 8px;
`;

export const MainContainer = styled.div`
    min-height: 100vh;
    padding: 48px 0;

    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const SearchBarInput = styled.input`
    border: none;
    padding: 0;
    margin: 0;
    outline-color: transparent;
    outline-style: none;

    width: 100%;

    font-family: 'Poppins Regular';
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.slate11};
    }
`;

export const Icon = styled(Image)``;
