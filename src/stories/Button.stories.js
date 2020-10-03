import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Controls/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  text: 'Button'
};


