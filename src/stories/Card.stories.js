import React from 'react';
import  Card  from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args}/>;

export const Simple = Template.bind({});
Simple.args = {};

