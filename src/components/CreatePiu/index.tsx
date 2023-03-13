import { useState, useRef } from 'react';
import useAutosizeTextArea from 'hooks/useAutoresizeTextArea';

import ProfileImage from 'components/ProfileImage';
import Button from 'components/Button';
import * as S from './styles';

interface CreatePiuProps {
    image: string;
    handleCreate: (text: string) => void;
}

export const CreatePiu: React.FC<CreatePiuProps> = ({
    image,
    handleCreate
}) => {
    const [piuText, setPiuText] = useState('');
    const characterCount = piuText.length;

    // hook customizado para aumentar o tamanho do text area de maneira dinâmica
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, piuText);

    const handleSend = () => {
        setPiuText('');
        handleCreate(piuText);
    };

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
                    onChange={(e) => setPiuText(e.target.value)}
                />
                <S.BottomWrapper>
                    <S.CharacterCount error={characterCount > 140}>
                        {characterCount}/140
                    </S.CharacterCount>
                    <Button
                        text="PIAR"
                        disabled={characterCount === 0 || characterCount > 140}
                        onClick={() => handleSend()}
                    />
                </S.BottomWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    );
};

export default CreatePiu;
