import React from 'react'

// 函数组件中使用
const Func = () => {
  let textRef = React.createRef();

  /*函数组件中没有this，这种写法是错误的
  function getInputValue () {
    console.log(this.textRef.current.value)
  }
  return <div style={{ border: '1px solid red', margin: '50px' }}>
    非受控组件
    <div>
      <input ref={this.textRef}></input>
      <button onClick={() => {
        this.getInputValue()
      }}>输出函数组件非受控值</button>
    </div>
  </div>*/

  // 不用const声明 报错
  //  getInputValue = () => {
  // const getInputValue = () => {
  // }
  function getInputValue () {
    console.log(textRef.current.value)
  }
  return <div style={{ border: '1px solid red', margin: '50px' }}>
    非受控组件--函数组件
    <div>
      <input ref={textRef}></input>
      <button onClick={getInputValue}
      >输出函数组件非受控值</button>
    </div>
  </div >
}


// 类组件非受控
class FeiShouKong extends React.Component {

  inputRef = React.createRef();

  getInputValue = () => {
    console.log(this.inputRef.current.value)
  }

  render () {
    return <div style={{ border: '1px solid red', margin: '50px' }}>
      非受控组件
      <div>
        <input ref={this.inputRef}></input>
        <button onClick={this.getInputValue}>输出input值</button>
      </div>
      <div>
        <div>函数组件</div>
        <div>
          <Func />
          {/* <Func ref={this.funRef} /> 函数组件没有this 此种写法错了 */}
        </div>
      </div>
    </div>

  }
}

export default FeiShouKong