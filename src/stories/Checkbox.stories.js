import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox label',
  onCheck: () => {
    console.log('Checkbox is checked');
  },
};
