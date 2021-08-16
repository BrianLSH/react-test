
import React, { Component } from 'react'

// 子组件
const Func = (props) => {
  // 函数组建中有个默认的形参,接收外部传入的数据
  return (
    <div>我是函数组件子组件: {props.msg}</div>
  )
}

// 类子组件
class Child extends Component {
  render (props) {
    console.log(this.props.msg);
    return (
      <div>我是类子组件
        {/* <div>{this.props.msg}</div> */}
        <button onClick={this.sendData}>点我给父组件传值</button>
      </div>

    )
  }
  state = {
    a: 100
  }
  sendData = () => {
    this.props.msg(this.state.a)
  }
}
// 父组件
class Index extends Component {
  // 接收子组件数据 父组件定义
  getChildData = (res) => {
    console.log('子组件传给父组件的数据', res);
  }

  render () {
    return (
      <div style={{ border: '1px solid red', padding: '40px' }}>
        <div>组件传值</div>
        <Func msg='你好我是老子来的' />
        {/* // 不加括号报错 */}
        <Child msg={this.getChildData} />
      </div>
    )
  }
}

export default Index