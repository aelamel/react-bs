import React from 'react';
import  Card  from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args}/>;

export const Simple = Template.bind({});
Simple.args = {

};


export const subTitle = Template.bind({});
subTitle.args = {
  subTitle: 'This is a subtitle'
};

export const listGroup = Template.bind({});
listGroup.args = {
  lists: ['Cras justo odio', 'Cras justo odio', 'Vestibulum at eros'],
};



export const headerFooter = Template.bind({});
headerFooter.args = {
  headerContent : 'this is a header content',
  footerContent : 'this is a footer content'
};
