export default {
  path: '/',
  component: () => import('layouts/default'),
  children: [
    { path: '', component: () => import('pages/home/index') }
  ]
}
