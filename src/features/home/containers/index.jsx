import React from 'react'
import { connect } from 'm2-redux'
import { getDataList, getDataItem } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getDataList, getDataItem } })
class HomePage extends React.Component {
  state = {
  }

  componentWillMount() {
    // this.props.getDataList()
  }

  render() {
    return (
      <div className="home-page">
        <h2>React工程化已配置完毕，从现在开始实现业务吧！</h2>
        <img src="/static/img/app-arch.png" alt="React工程架构"/>
      </div>
    )
  }
}

export default HomePage
