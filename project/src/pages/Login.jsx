import React from 'react'
import { Input, Button, Divider } from 'antd'
import { Link, Route } from 'react-router-dom'
import Register from './Register.jsx'

class Login extends React.Component {
  state = {
    users:[
      {
      username: 'hbz',
      password: '123',
      }
    ]
  }
  getValue = (e) => {
    console.log(e.target)
    let value = e.target.value
    let name = e.target.name
    return value
  }
  render (){
    return (
      <div>
        <Divider />
        <div>
          账号:<Input type="text" name="username" placeholder="用户账号" onChange={this.getValue}></Input>
        </div>
        <div>
          密码:<Input type="password" name="password" placeholder="用户密码" onChange={this.getValue}></Input>
        </div>
        <Button type="primary" onClick={ this.handleLogin }>登录</Button>
        <Button type="primary">
          <Link to="/register" component={Register}>注册</Link>
        </Button>
      </div>
    )
  }
}

export default Login