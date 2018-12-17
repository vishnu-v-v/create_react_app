import components from './components'

const routes = [
  {
    component: components['Landing'],
    path: '/',
    exact: true
  },
  {
    component: components['ForgotUserId'],
    path: '/forgot_user_id',
    exact: true
  }
];

export default { routes }