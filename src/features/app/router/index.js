import { loadRoutesConfig } from 'm2-react'
import App from '@/features/app/containers'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'

export default loadRoutesConfig(App, [
  commonRouter,
  homeRouter
])
