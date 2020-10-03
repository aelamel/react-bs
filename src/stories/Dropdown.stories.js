import React from 'react';
import  Dropdown  from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: 'Option 1', value : 1
    },
    {
      label: 'Option 2', value : 2
    }
  ]
};

