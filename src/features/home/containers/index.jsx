import React from 'react'
import { connect } from 'm2-redux'
import { authService } from '@/features/app/service'
import { clearRedux } from '@/features/app/redux/actions'
import { userLogout } from '@/features/auth/redux/actions'
import { getDataList, getDataItem } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: ['home', 'auth'], actions: { getDataList, getDataItem, clearRedux, userLogout } })
class HomePage extends React.Component {
  state = {
    // 定义组件内部状态数据
  }

  fields = {
    // 定义组件内部无状态数据
  }

  static propTypes = {
    // 定义组件间交互参数类型
  }

  componentDidMount() {
    // 对页面元素操作，向服务端发放数据请求
    // this.props.getDataList()
  }

  async handleLogout() {
    const result = await authService.logout()
    if (result) {
      const { userLogout, clearRedux } = this.props
      userLogout({ username: '', authenticated: false })
      clearRedux()
      location.hash = '/auth/login'
    }
  }

  render() {
    const { loginUser } = this.props.auth

    return (
      <div className="home-page">
        <span>您好，{loginUser.username}</span>
        <button className="btn btn-danger"  style={{marginLeft:10}} onClick={()=>this.handleLogout()}>注销</button>
        <h2>React工程化已配置完毕，从现在开始实现业务吧！</h2>
        <img src="/static/img/app-arch.png" alt="React工程架构"/>
      </div>
    )
  }
}

export default HomePage
