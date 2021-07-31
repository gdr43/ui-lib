import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  type: 'secondary'
};
