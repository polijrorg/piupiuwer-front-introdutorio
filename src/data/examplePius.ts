/* eslint-disable no-irregular-whitespace */

import loggedInUser from './loggedInUser';

export default [
    {
        id: 2,
        user: {
            name: 'apenasbrum',
            handle: 'bruuuuuuuuuuuuuuuuuum',
            image: '/assets/images/brum.png'
        },
        text: 'eu faço crochê',
        likes: 1190,
        comments: 130,
        time: new Date(2023, 2, 13)
    },
    {
        id: 1,
        user: loggedInUser,
        text: 'Mais uma sexta que passou e eu não fiquei lucio',
        likes: 434,
        comments: 34,
        time: new Date(2023, 2, 12)
    },
    {
        id: 0,
        user: {
            name: 'Tiago Lucio',
            handle: 'lucioT',
            image: '/assets/images/lucio.png'
        },
        text: `essa é a capivara da sorte

        　　　　/)─―ヘ
        　　＿／　　　　＼
        ／　　　  　●　　●
        ｜　　　　　　　▼　|
        ｜　　　　　　　亠 ノ
          U￣U￣￣￣￣U￣U

        repasse para o NTec bater as metas`,
        likes: 215,
        comments: 12,
        time: new Date(2023, 2, 10)
    }
];
