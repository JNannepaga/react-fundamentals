import MyButton from './myButton';
import React from 'react';

export default{
    title: 'MyButton',
    component: MyButton
}

export const primary = () => <MyButton styling = 'primary'> Primary </MyButton>
export const success = () => <MyButton styling = 'success'> Success </MyButton>
export const info = () => <MyButton styling = 'info'> Info </MyButton>
export const warning = () => <MyButton styling = 'warning'> warning </MyButton>

