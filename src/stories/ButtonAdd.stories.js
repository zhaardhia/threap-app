import ButtonAdd from '../components/ButtonAdd';

const stories = {
  title: 'Button Add',
  component: ButtonAdd,
};

export default stories;

const WithTypeAddThread = () => (
  <ButtonAdd
    ctaLabel="Add Thread"
    type="addThread"
  />
);

const WithTypeAddComment = () => (
  <ButtonAdd
    ctaLabel="Add Comment"
    type="addComment"
  />
);

export { WithTypeAddThread, WithTypeAddComment };
