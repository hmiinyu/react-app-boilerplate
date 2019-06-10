import NotFoundPage from '@/features/common/containers/not-found'

export default {
  path: '',
  name: '公共模块',
  children: [
    { path: '404', component: NotFoundPage }
  ]
}
