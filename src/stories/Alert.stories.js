import React from 'react';
import Alert from "../components/Alert";

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args}/>;
export const Default = Template.bind({});

Default.args  =  {};

export const Danger = Template.bind({});
Danger.args  =  {options:{ style : 'alert-danger'}};


export const Success = Template.bind({});
Success.args  =  {options:{ style : 'alert-success'}};


export const Warning = Template.bind({});
Warning.args  =  {options:{ style : 'alert-warning'}};


export const Info = Template.bind({});
Info.args  =  {options:{ style : 'alert-info'}};


export const Light = Template.bind({});
Light.args  =  {options:{ style : 'alert-light'}};


export const Dark = Template.bind({});
Dark.args  =  {options:{ style : 'alert-dark'}};

export const Secondary = Template.bind({});
Secondary.args  =  {options:{ style : 'alert-secondary'}};


export const Close = Template.bind({});
Close.args  =  {options:{ style : 'alert-primary', close: true}};

