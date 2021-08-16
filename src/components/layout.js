import React from 'react'
import Header from './header'
class LayOut extends React.Component {
  render () {
    const content = {
      width: '100%',
      height: '100vh',
      border: '1px solid red',
      // box- sizing: 'border-box'
    }


    return (

      <div style={content} >
        <Header />
      </div>
    )

  }

}


export default LayOut