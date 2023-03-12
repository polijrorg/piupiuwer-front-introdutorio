import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import UpButton from '.';

export default {
    title: 'Botão para subir',
    component: UpButton
} as Meta;

export const Default: Story = () => <UpButton />;
