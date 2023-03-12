import Piu from 'components/Piu';
import { useState } from 'react';
import Sidebar from 'components/Sidebar';
import CreatePiu from 'components/CreatePiu';
import UpButton from 'components/UpButton';

import * as S from './styles';

const FeedTemplate = () => {
    const [pius, setPius] = useState([
        {
            name: 'cauan',
            handle: 'caukazama',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
            text: 'Mais uma sexta que passou e eu não fiquei lucio',
            likes: 434,
            comments: 34,
            time: 'há 2h atrás'
        }
    ]);

    const createPiu = (text: string) => {
        if (text.length > 140) return;
        setPius((oldArray) => [
            ...oldArray,
            {
                name: 'cauan',
                handle: 'caukazama',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
                text,
                likes: 434,
                comments: 34,
                time: 'há 2h atrás'
            }
        ]);
    };

    return (
        <S.Container>
            <Sidebar />
            <S.MainContainer>
                <S.Title>Página Principal</S.Title>
                <S.SearchBarWrapper>
                    <S.Icon
                        src="/assets/icons/Search.svg"
                        width="32px"
                        height="32px"
                    />
                    <S.SearchBarInput placeholder="Buscar no Piupiuwer" />
                </S.SearchBarWrapper>
                <CreatePiu
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
                    createPiu={createPiu}
                />
                {pius.map((piu) => (
                    <Piu
                        name={piu.handle}
                        handle={piu.name}
                        image={piu.image}
                        text={piu.text}
                        likes={piu.likes}
                        comments={piu.comments}
                        time={piu.time}
                    />
                ))}
            </S.MainContainer>
            <UpButton />
        </S.Container>
    );
};
export default FeedTemplate;
