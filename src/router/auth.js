export default {
  path: '/auth',
  component: () => import('layouts/auth'),
  children: [
    { path: 'sign-in', component: () => import('pages/auth/sign-in') },
    { path: 'sign-out', component: () => import('pages/auth/sign-out') }
  ]
}
