import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
    width: 760px;
    background-color: ${({ theme }) => theme.colors.sky2};
    border-radius: 24px;

    padding: 16px 24px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
`;

export const ImageWrapper = styled.div`
    padding: 0px 14px;
`;

export const RightWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const TopWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const NameWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NameText = styled.span`
    font-family: 'Poppins SemiBold', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
`;

export const TimeText = styled.span`
    font-family: 'Poppins Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.slate11};
`;
export const HandleText = styled.span`
    font-family: 'Poppins Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.slate11};
`;

export const BottomWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const PiuText = styled.p`
    font-family: 'Poppins Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.sky12};
`;

export const IconClicker = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;

export const Icon = styled(Image)``;

export const IconCounterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;

    & > span {
        font-family: 'Poppins Regular', sans-serif;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.sky12};
    }
`;

export const IconBar = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 24px;

    &:nth-child(3) {
        margin-right: auto;
    }
`;
