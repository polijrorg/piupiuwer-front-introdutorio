import { useState } from 'react';

import Piu from 'components/Piu';
import Sidebar from 'components/Sidebar';
import CreatePiu from 'components/CreatePiu';
import UpButton from 'components/UpButton';

import IPiu from 'interfaces/Piu';
import loggedInUser from 'data/loggedInUser';
import examplePius from 'data/examplePius';
import * as S from './styles';

const FeedTemplate = () => {
    const [id, setId] = useState(() => examplePius.length + 1);
    const [pius, setPius] = useState<IPiu[]>(examplePius);
    const [search, setSearch] = useState('');

    // As funções de criar e deletar piu acabam sendo um pouco estranhas no momento,
    // já que não tem integração com o back

    const deletePiu = (piuId: number) => {
        setPius(pius.filter((piu) => piu.id !== piuId));
    };

    const handleCreate = (text: string) => {
        setPius((oldArray) => [
            {
                id,
                user: loggedInUser,
                text,
                likes: 0,
                comments: 0,
                time: new Date()
            },
            ...oldArray
        ]);

        setId(id + 1);
    };

    return (
        <S.Container>
            <Sidebar loggedInUser={loggedInUser} />
            <S.MainContainer>
                <S.Title>Página Principal</S.Title>
                <S.SearchBarWrapper>
                    <S.Icon
                        src="/assets/icons/Search.svg"
                        width="32px"
                        height="32px"
                    />
                    <S.SearchBarInput
                        placeholder="Buscar no Piupiuwer"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    />
                </S.SearchBarWrapper>
                <CreatePiu
                    image={loggedInUser.image}
                    handleCreate={handleCreate}
                />
                {pius.map((piu) => (
                    <Piu
                        key={piu.id}
                        piu={piu}
                        deletePiu={deletePiu}
                        visible={[
                            piu.user.name,
                            piu.user.handle,
                            piu.text
                        ].reduce(
                            (acc, cur) =>
                                acc || cur.toLowerCase().includes(search),
                            false
                        )}
                    />
                ))}
            </S.MainContainer>
            <UpButton />
        </S.Container>
    );
};
export default FeedTemplate;
