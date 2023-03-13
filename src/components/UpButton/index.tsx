import * as S from './styles';

const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js

const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const UpButton: React.FC = () => {
    return (
        <S.Wrapper onClick={scrollToTop}>
            <S.Icon
                src="/assets/icons/UpArrow.svg"
                width="32px"
                height="32px"
            />
        </S.Wrapper>
    );
};

export default UpButton;
