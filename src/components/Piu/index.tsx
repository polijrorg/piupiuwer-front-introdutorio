import { useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import pt from 'javascript-time-ago/locale/pt';

import ProfileImage from 'components/ProfileImage';
import IPiu from 'interfaces/Piu';
import loggedInUser from 'data/loggedInUser';
import * as S from './styles';

interface PiuProps {
    piu: IPiu;
    deletePiu: (piuId: number) => void;
    visible: boolean;
}

TimeAgo.addDefaultLocale(pt);

const timeAgo = new TimeAgo('');

export const Piu: React.FC<PiuProps> = ({
    piu: {
        id,
        user: { name, handle, image },
        text,
        likes,
        comments,
        time
    },
    deletePiu,
    visible
}) => {
    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    const handleShare = () => {
        window.open(
            `whatsapp://send?text=Fowarded Message - PiuPiuwer%0aFrom: ${name} (@${handle})%0a%0a${text.replaceAll(
                '\n',
                '%0a'
            )}`
        );
    };

    return (
        <S.Wrapper visible={visible}>
            <S.ImageWrapper>
                <ProfileImage src={image} size="80px" />
            </S.ImageWrapper>
            <S.RightWrapper>
                <S.TopWrapper>
                    <S.NameWrapper>
                        <S.NameText>{name}</S.NameText>
                        <S.TimeText>
                            {timeAgo.format(time, 'twitter-now')}
                        </S.TimeText>
                    </S.NameWrapper>
                    <S.HandleText>{`@${handle}`}</S.HandleText>
                </S.TopWrapper>
                <S.BottomWrapper>
                    <S.PiuText>{text}</S.PiuText>
                    <S.IconBar>
                        <S.IconCounterWrapper>
                            <S.IconClicker onClick={() => setLike(!like)}>
                                <S.Icon
                                    src={`/assets/icons/${
                                        like ? 'Filled' : ''
                                    }Heart.svg`}
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                            <S.Amount>{likes + (like ? 1 : 0)}</S.Amount>
                        </S.IconCounterWrapper>
                        <S.IconCounterWrapper>
                            <S.IconClicker>
                                <S.Icon
                                    src="/assets/icons/Chat.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                            <S.Amount>{comments}</S.Amount>
                        </S.IconCounterWrapper>
                        <S.IconClicker onClick={() => setBookmark(!bookmark)}>
                            <S.Icon
                                src={`/assets/icons/${
                                    bookmark ? 'Filled' : ''
                                }Bookmark.svg`}
                                width="32px"
                                height="32px"
                            />
                        </S.IconClicker>
                        {loggedInUser.handle === handle ? (
                            <S.IconClicker onClick={() => deletePiu(id)}>
                                <S.Icon
                                    src="/assets/icons/Trash.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </S.IconClicker>
                        ) : (
                            <S.IconClicker onClick={() => handleShare()}>
                                <S.Icon
                                    src="/assets/icons/Share.svg"
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
