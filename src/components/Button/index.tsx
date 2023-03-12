import * as S from './styles';

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    text: string;
}

export const Button: React.FC<ButtonProps> = ({
    disabled = false,
    onClick,
    text
}) => {
    return (
        <S.Wrapper onClick={onClick} disabled={disabled}>
            {text}
        </S.Wrapper>
    );
};

export default Button;
