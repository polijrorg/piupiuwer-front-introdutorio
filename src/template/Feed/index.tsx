import Piu from 'components/Piu';
import { useState } from 'react';
import Sidebar from 'components/Sidebar';
import CreatePiu from 'components/CreatePiu';
import UpButton from 'components/UpButton';

import * as S from './styles';

const FeedTemplate = () => {
    const [id, setId] = useState(1);

    const [pius, setPius] = useState([
        {
            id: 0,
            name: 'brum',
            handle: '@beatrizbrum',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
            text: 'Mais uma sexta que passou e eu não fiquei lucio',
            likes: 434,
            comments: 34,
            time: 'há 2h atrás'
        }
    ]);

    // As funções de id, criar e deletar piu acabam sendo um pouco estranhas no momento,
    // existir integração com o back

    const deletePiu = (piuId: number) => {
        setPius(pius.filter((piu) => piu.id !== piuId));
    };

    const createPiu = (text: string) => {
        if (text.length > 140) return;
        setPius((oldArray) => [
            {
                id,
                name: 'cauan',
                handle: '@caukazama',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
                text,
                likes: 434,
                comments: 34,
                time: 'há 2h atrás'
            },
            ...oldArray
        ]);

        setId(id + 1);
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
                        // key deve ser usado sempre que existe um map, sendo passado um identificador único
                        key={piu.id}
                        id={piu.id}
                        name={piu.name}
                        handle={piu.handle}
                        image={piu.image}
                        text={piu.text}
                        likes={piu.likes}
                        comments={piu.comments}
                        time={piu.time}
                        deletePiu={deletePiu}
                    />
                ))}
            </S.MainContainer>
            <UpButton />
        </S.Container>
    );
};
export default FeedTemplate;
