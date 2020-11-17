import React from 'react';
import Table from "../components/Table";

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args}/>;
export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});
Dark.args = { options: { style: 'table-dark' } };

export const Striped  = Template.bind({});
Striped.args  =  {options:{ style : 'table-striped'}};

export const Hoverable = Template.bind({});
Hoverable.args = { options: { style: 'table-hover' } };

export const Small = Template.bind({});
Small.args  =  {options:{ style : 'table-sm'}};