import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Piu from '.';

export default {
    title: 'Piu',
    component: Piu,
    args: {
        name: 'cauan',
        handle: 'caukazama',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
        text: 'Mais uma sexta que passou e eu não fiquei lucio',
        likes: 434,
        comments: 34,
        time: 'há 2h atrás'
    }
} as Meta;

export const Default: Story = (args) => <Piu {...args} />;
