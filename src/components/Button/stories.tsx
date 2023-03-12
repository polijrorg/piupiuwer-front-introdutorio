import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '.';

export default {
    title: 'Botão simples',
    component: Button,
    args: {
        text: 'Piar'
    }
} as Meta;

export const Default: Story = (args) => <Button text="Piar" {...args} />;
