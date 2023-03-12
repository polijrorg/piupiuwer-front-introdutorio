import { useState } from 'react';
import ProfileImage from 'components/ProfileImage';
import * as S from './styles';

interface PiuProps {
    name: string;
    handle: string;
    image: string;
    text: string;
    likes: number;
    comments: number;
    time: string;
    id: number;
    deletePiu: (piuId: number) => void;
}

export const Piu: React.FC<PiuProps> = ({
    name,
    handle,
    image,
    text,
    likes,
    comments,
    id,
    time,
    deletePiu
}) => {
    // como ainda não temos o login, usuário logado hardcoded

    const loggedUserHandle = '@caukazama';

    const [like, setLike] = useState(false);
    const [likeCounter, setLikeCounter] = useState(likes);
    const [bookmark, setBookmark] = useState(false);

    const handleLike = () => {
        if (!like) setLikeCounter(likeCounter + 1);
        else setLikeCounter(likeCounter - 1);

        setLike(!like);
    };

    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <ProfileImage src={image} size="80px" />
            </S.ImageWrapper>
            <S.RightWrapper>
                <S.TopWrapper>
                    <S.NameWrapper>
                        <S.NameText>{name}</S.NameText>
                        <S.TimeText>{time}</S.TimeText>
                    </S.NameWrapper>
                    <S.HandleText>{handle}</S.HandleText>
                </S.TopWrapper>
                <S.BottomWrapper>
                    <S.PiuText>{text}</S.PiuText>
                    <S.IconBar>
                        <S.IconCounterWrapper>
                            <S.IconClicker onClick={handleLike}>
                                <S.Icon
                                    src={
                                        like
                                            ? '/assets/icons/FilledHeart.svg'
                                            : '/assets/icons/Heart.svg'
                                    }
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                            <span>{likeCounter}</span>
                        </S.IconCounterWrapper>
                        <S.IconCounterWrapper>
                            <S.IconClicker>
                                <S.Icon
                                    src="/assets/icons/Chat.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                            <span>{comments}</span>
                        </S.IconCounterWrapper>
                        {handle === loggedUserHandle ? (
                            <S.IconClicker onClick={() => deletePiu(id)}>
                                <S.Icon
                                    src="/assets/icons/Trash.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                        ) : (
                            <S.IconClicker
                                onClick={() => setBookmark(!bookmark)}
                            >
                                <S.Icon
                                    src={
                                        bookmark
                                            ? '/assets/icons/FilledBookmark.svg'
                                            : '/assets/icons/Bookmark.svg'
                                    }
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                        )}
                    </S.IconBar>
                </S.BottomWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    );
};

export default Piu;
