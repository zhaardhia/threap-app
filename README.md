# Threap-App

> Live on [threap-app](https://threap-app.vercel.app/)

### Stack used

- [Create React App](https://github.com/facebook/create-react-app)
- [Tailwind](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)

### Developing

A Node.js LTS setup with [npm](https://www.npmjs.com/) is recommended.

In the project directory, you can run:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production
npm run build

# run unit tests
npm run test

# run end to end tests
npm run e2e

# run storybook
npm run storybook

# run ci-test implementation
npm run ci:test
```

## Architecture

### State management

- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)

### Testing Framework

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)

### Deployment (CI / CD)

I used [Vercel](https://vercel.com/) through [Github Action](https://github.com/features/actions) for CI / CD

### Code Splitting

- [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Loadable Components](https://loadable-components.com/)

### Directory structure

- `.github/` - ci / cd config
- `.storybook` - storybook config
- `cypress` - end to end testing scripts and other files
- `src/components` - UI/Layout components that are used globally throughout project.
- `src/data` - JS files used for API Variable & fetching API data method.
- `src/hooks` - JS files used for custom hook.
- `src/pages` - Pages Threap-App Website.
- `src/states` - Redux store, action and reducer files.
- `src/stories` - Storybook scripts
- `src/public` - React public directory, used for storing static assets.