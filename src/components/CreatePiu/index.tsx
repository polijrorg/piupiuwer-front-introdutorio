import { useState, useRef } from 'react';
import useAutosizeTextArea from 'hooks/useAutoresizeTextArea';

import ProfileImage from 'components/ProfileImage';
import Button from 'components/Button';
import * as S from './styles';

interface CreatePiuProps {
    image: string;
    createPiu: (text: string) => void;
}

export const CreatePiu: React.FC<CreatePiuProps> = ({ image, createPiu }) => {
    const [piuText, setPiuText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    // hook customizado para aumentar o tamanho do text area de maneira dinâmica
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, piuText);

    function setTextAreaInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const val = e.target.value;

        setPiuText(val);
        setCharacterCount(val.length);
    }

    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <ProfileImage src={image} size="80px" />
            </S.ImageWrapper>
            <S.RightWrapper>
                <S.TextInput
                    placeholder="O que você quer piar hoje?"
                    rows={1}
                    value={piuText}
                    ref={textAreaRef}
                    onChange={(e) => setTextAreaInput(e)}
                />
                <S.BottomWrapper>
                    <S.CharacterCount error={characterCount > 140}>
                        {characterCount}/140
                    </S.CharacterCount>
                    <Button
                        text="PIAR"
                        disabled={characterCount === 0 || characterCount > 140}
                        onClick={() => createPiu(piuText)}
                    />
                </S.BottomWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    );
};

export default CreatePiu;
