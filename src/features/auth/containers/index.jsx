import React from 'react'
import { DataStorage } from 'm2-core'
import { connect } from 'm2-redux'
import { authService } from '@/features/app/service'
import { userLogin } from '@/features/auth/redux/actions'
import './index.less'

@connect({ actions: { userLogin } })
class UserLoginPage extends React.Component {
  async handleLogin() {
    const result = await authService.login('Miracle', 123)
    if (result) {
      DataStorage.set('app-access-token', result.token)
      this.props.userLogin({ username: result.username, authenticated: true })
      location.hash = '/'
    }
  }

  render() {
    return (
      <div className="user-login-page">
        <div className="profile">
          <button className="btn btn-info" onClick={()=>this.handleLogin()}>登录</button>
        </div>
      </div>
    )
  }
}

export default UserLoginPage
