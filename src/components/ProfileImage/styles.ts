import styled from 'styled-components';
import Image from 'next/image';

export const ProfileBorder = styled.div`
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    //para a borda ficar dentro da div(funciona em todos os browsers)
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    border-radius: 50%;
    border: solid 3px ${({ theme }) => theme.colors.sky11};
`;

export const ProfileImage = styled(Image)`
    padding: 0;
    margin: 0;
    border-radius: 50%;
`;
