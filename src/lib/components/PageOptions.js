import React, { Component } from 'react'
import ToggleSwitch from './ToggleSwitch'

export default class PageOptions extends Component {
  state = {
    showSidebar: false,
    showFeaturedImage: false,
  }

  handleChange = (e) => {
    console.log(e.target.id,e.target,e.target.checked)
    const newVal = {...this.state,...{[e.target.id]: e.target.checked}}
    this.setState(newVal)
    this.props.onChange(newVal)
  }

  componentDidMount = (e) => {
    if(typeof this.props.value === 'undefined') {
      this.props.onChange(this.state)
    }
  }

  render() {
    const {showSidebar,showFeaturedImage} = this.state
    return h('div',{
      style: optionContainer,
    },[
      h('div',{
        classNames: ['page-option','showHide'],
        style: pageOption,
      },[
        h('div',{},[
          "Sidebar: ",
          h(ToggleSwitch,{
            id: 'showSidebar',
            Text: ['Show','Hide'],
            defaultChecked: showSidebar,
            checked: showSidebar,
            onChange: this.handleChange,
            style: showHide,  
          })  
        ]),
      ]),
      h('div',{
        classNames: ['page-option','showHide'],
        style: pageOption,
      },[
        h('div',{},[
          "Featured Image: ",
          h(ToggleSwitch,{
            id: 'showFeaturedImage',
            Text: ['Show','Hide'],
            defaultChecked: this.state.showFeaturedImage,
            checked: this.state.showFeaturedImage,
            onChange: this.handleChange,
            style: showHide,  
          })
        ]),
      ]),
    ])
  }
}

import wrapperStyle from './styles/wrapper'
import marginNone from './styles/margin'
import {flexContainer, flexItem25, flexItem75, justifyCenter, flexColumnReverse, justifyEnd } from './styles/flexContainer';

const optionContainer = {...wrapperStyle,...flexContainer}

const pageOption = {
  margin: '0 1rem',
}

const showHide = {
  width: "5.25rem",
}