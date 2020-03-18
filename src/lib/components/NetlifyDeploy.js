import React, { Component } from 'react'

export default class NetlifyDeploy extends Component {
  state = {
    url: 'https://api.netlify.com/api/v1/badges/3cdd61b0-ffbd-4f9a-b81e-16049fc014e5/deploy-status'
  }

  startTimer = () => {
    const date = new Date()
    setInterval(()=>{
      this.setState({url: this.state.url+date.now()})
    },1000)
  }

  componentDidMount = (e) => {
    this.startTimer()
  }

  render() {
    return (
      <div>
        <img src={this.state.url}/>
      </div>
    )
  }
}
