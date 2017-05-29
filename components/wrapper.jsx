import React from 'react'

export default class Wrapper extends React.Component {
  render() {
    return (
      <div id="wrapper" >
        { this.props.childs }
      </div>
    )
  }
}
