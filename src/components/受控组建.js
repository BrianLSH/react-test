import React from 'react'

class ConInput extends React.Component {

  state = {
    value: ''
  }

  setValue = (e) => {
    console.log(e.target.value)

    this.setState({
      value: e.target.value
    })

  }
  render () {
    return <div style={{ margin: '50px', border: '1px solid red' }}>
      <p>受控组件</p>
      <p>
        <span>{this.state.value}</span>
      </p>
      <p>
        <input onChange={this.setValue}></input>
      </p>

    </div>
  }

}

export default ConInput