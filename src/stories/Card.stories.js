import React from 'react';

import { Card } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src:'https://via.placeholder.com/250x200', 
    title : 'Card title',
    description : 'Some quick example text to build on the card title and make up the bulk of the card',
    btnTxt: 'Go Somewhere'
};
