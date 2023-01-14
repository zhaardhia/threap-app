import Footer from '../components/Footer';

const stories = {
  title: 'Footer',
  component: Footer,
};

export default stories;

const PersonalizedFooter = () => (
  <Footer
    year="2022"
    link="https://github.com/zhaardhia"
    developer="zhaardhia"
  />
);

export { PersonalizedFooter };
