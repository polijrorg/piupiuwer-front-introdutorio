import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import CreatePiu from '.';

export default {
    title: 'Criar Piu',
    component: CreatePiu,
    args: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU'
    }
} as Meta;

export const Default: Story = (args) => (
    <CreatePiu
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
        {...args}
    />
);
