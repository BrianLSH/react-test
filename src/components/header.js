import React from 'react'
import ConInput from './受控组建'
import FeiShouKong from './非受控组件'
import Index from './组件通信'
import Parent from './兄弟组件传值/兄弟组件传值'
class Header extends React.Component {


  // handleClick (e) {
  //   console.log(e, this)
  // }
  /*调用this 的是 window, window中没有Header 这个组件实例 */

  handleClick1 = (e) => {
    console.log(e, this)
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState({

      count: this.state.count + 1

    })
  }

  min = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    const header = {
      border: '1px solid red',
    }

    return <div style={header}>
      <ConInput></ConInput>
      <FeiShouKong></FeiShouKong>
      <Index></Index>
      <Parent></Parent>

      <div style={{ border: '1px solid blue' }}>
        <p></p>
        <p></p>
        <button onClick={
          this.handleClick1
        }>点我类组件</button>

        <div>{this.state.count}</div>
        <div><button onClick={this.add}>点我加一</button><button onClick={this.min}>点我减一</button></div>
      </div>
    </div >

  }
}

export default Header