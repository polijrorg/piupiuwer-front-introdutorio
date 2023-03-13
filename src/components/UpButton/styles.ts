import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.button`
    margin: 0;
    border: none;
    padding: 0;

    position: fixed;
    right: 144px;
    bottom: 72px;

    width: 80px;
    height: 80px;
    border-radius: 50%;

    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.sky11};
`;

export const Icon = styled(Image)``;
