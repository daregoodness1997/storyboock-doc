import React from 'react';
import Task from '../components/Task';

export default {
  title: 'Component/Task',
  component: Task,
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});

Pinned.args = {
    
}
