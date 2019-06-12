import { loadRoutesConfig, loadLayoutRoutesConfig } from 'm2-react'
import App from '@/features/app/containers'
import AppLayout from '@/features/app/layouts'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'

// 支持单一布局的配置(不需要单独配置layouts, 只需要App作为容器即可)
// export default loadRoutesConfig(App, [
//   commonRouter,
//   homeRouter
// ])

// 支持多布局(需要配置layouts, 并在feature的router中根据需要设置layout即可)
export default loadLayoutRoutesConfig(AppLayout, [
  commonRouter,
  homeRouter
])
