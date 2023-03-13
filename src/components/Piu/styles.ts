import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const appearHeight = keyframes`
  from {
    max-height: 0;

  }

  to {
    max-height: 400px;

  }
`;

interface WrapperProps {
    visible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    width: 760px;
    background-color: ${({ theme }) => theme.colors.sky2};
    border-radius: 24px;

    padding: 16px 24px;

    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    overflow: hidden;

    animation: ${appearHeight} 3s cubic-bezier(0.16, 0.98, 1, 0.97);
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
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const PiuText = styled.p`
    font-family: 'Poppins Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.sky12};
    max-width: 600px;
    white-space: initial;
    word-wrap: break-word;
    white-space: pre-line;
    overflow-wrap: break-word;
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

export const Amount = styled.span`
    width: 32px;
`;

export const IconBar = styled.div`
    width: 60%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;

    & > ${IconClicker} {
        margin-left: auto;
    }
`;
