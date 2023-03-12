import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import ProfileImage from '.';

export default {
    title: 'Imagem de perfil',
    component: ProfileImage,
    args: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU',
        size: '32px'
    }
} as Meta;

export const Default: Story = (args) => (
    <ProfileImage
        size="32px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
        {...args}
    />
);
