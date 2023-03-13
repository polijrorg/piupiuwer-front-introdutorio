import styled from 'styled-components';
import Image from 'next/image';

interface ProfileImageStyledProps {
    size: string;
}

export const ProfileImage = styled(Image)<ProfileImageStyledProps>`
    //para a borda ficar dentro da div(funciona em todos os browsers)
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    border-radius: 50%;
    outline: solid 3px ${({ theme }) => theme.colors.sky11};
    outline-offset: -3px;
`;
