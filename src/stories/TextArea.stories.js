import React from 'react';
import TextArea from '../components/TextArea';
export default {
	title: 'Components/TextArea',
	component: TextArea
};
const Template = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Hello',
	onChange: () => {
		console.log('Textarea changed');
	},
	value:'Hello this is a test',
	maxLength:300,
	options:{
		cols:50,
		rows:5,
		name: 'textarea',
		placeHolder:'Please enter your comment'
	}
};
