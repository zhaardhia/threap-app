import ButtonAdd from '../components/ButtonAdd';

const stories = {
  title: 'Button Add',
  component: ButtonAdd,
};

export default stories;

const TemplateStory = (args) => <ButtonAdd {...args} />;

const WithTypeAddThread = TemplateStory.bind({});
WithTypeAddThread.args = {
  ctaLabel: 'Add Thread',
  type: 'addThread',
};

const WithTypeAddComment = TemplateStory.bind({});
WithTypeAddComment.args = {
  ctaLabel: 'Add Comment',
  type: 'addComment',
};

export { WithTypeAddThread, WithTypeAddComment };
