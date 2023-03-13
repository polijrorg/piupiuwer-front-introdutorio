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
    const [pius, setPius] = useState<IPiu[]>(examplePius);
    const [search, setSearch] = useState('');

    const handleCreate = (text: string) => {
        setPius((oldArray) => [
            {
                user: loggedInUser,
                text,
                likes: 0,
                comments: 0,
                time: new Date()
            },
            ...oldArray
        ]);
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
                {pius
                    .filter(({ user: { name, handle }, text }) =>
                        [name, handle, text].reduce(
                            (acc, cur) =>
                                acc || cur.toLowerCase().includes(search),
                            false
                        )
                    )
                    .map((piu) => (
                        <Piu piu={piu} setPius={setPius} />
                    ))}
            </S.MainContainer>
            <UpButton />
        </S.Container>
    );
};
export default FeedTemplate;
