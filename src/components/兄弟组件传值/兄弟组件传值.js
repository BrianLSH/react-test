import React, { Component } from 'react'

class Parent extends Component {

  state = {
    a: 0
  }

  changeA = () => {
    this.setState({
      a: this.state.a + 1
    })
  }

  minusA = () => {
    this.setState({
      a: this.state.a - 1
    })
  }
  render () {

    let style = { border: '1px solid red', padding: '50px' };

    return (
      <div className={style}>
        <h1>兄弟组件状态提升</h1>
        <FuncA a={this.state.a} fn={this.changeA} />
        <ChildB a={this.state.a} minus={this.minusA} />
      </div>
    )
  }
}


// 函数兄弟组件A
const FuncA = (props) => {
  return (
    <div>
      <p>兄弟函数组件A:{props.a}</p>
      <button onClick={props.fn}>改变A</button>
    </div>
  )
}


// 类组件兄弟B
class ChildB extends Component {
  render () {
    return (
      <div>
        <p>兄弟函数组件B:{this.props.a}</p>
        <button onClick={this.props.minus}>改变A</button>
      </div>
    )
  }
}
export default Parent