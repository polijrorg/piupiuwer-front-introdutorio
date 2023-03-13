import styled from 'styled-components';

interface CharacterCountProps {
    error: boolean;
}

export const Wrapper = styled.div`
    width: 760px;
    background-color: ${({ theme }) => theme.colors.sky5};
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

    padding-top: 4px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const TextInput = styled.textarea`
    border: none;
    overflow: hidden;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; // remove the resize handle on the bottom right

    min-height: 42px;

    font-family: 'Poppins Regular', sans-serif;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.sky12};

    background-color: transparent;
    &::placeholder {
        color: ${({ theme }) => theme.colors.slate11};
    }

    width: 100%;
`;

export const CharacterCount = styled.span<CharacterCountProps>`
    font-family: 'Poppins Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme, error }) => (error ? 'red' : theme.colors.sky12)};
`;
