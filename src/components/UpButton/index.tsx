import * as S from './styles';

export const UpButton: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Icon
                src="/assets/icons/UpArrow.svg"
                width="32px"
                height="32px"
            />
        </S.Wrapper>
    );
};

export default UpButton;
