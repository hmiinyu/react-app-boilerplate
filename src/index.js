import React from 'react'
import { render } from 'm2-react'
import { Root } from 'm2-redux'
import AppRouter from '@/features/app/router'
import AppStore from '@/features/app/redux/store'

render(
  <Root store={AppStore()} routes={AppRouter}/>
)

// 支持对路由的类型配置，默认"hash", 可配置为browser路由
/*
render(
  <Root store={AppStore()} routes={AppRouter} routeType="browser" />
)
*/

// 多个组件渲染使用components参数
/*
render({
  components: [
    // <Loading key="loading"/>,
    <Root store={AppStore()} routes={AppRouter} key="root"/>
  ]
})
*/
