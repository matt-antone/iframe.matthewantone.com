import React, { Component } from 'react'
import ToggleSwitch from './ToggleSwitch'
import NetlifyDeploy from './NetlifyDeploy'
import wrapperStyle from './styles/wrapper'

export default class DraftField extends Component {
  render() {
    return h('div',{
      id: "draft-field",
    },h('div',{
        style: flexWrapper,
        tabindex: 0,
      },[
        h(ToggleSwitch,{
          id: 'draft',
          Text: ['draft','public'],
          defaultChecked: this.props.value,
          checked: this.props.value,
          onChange: (e) => { 
            console.log('checkbox',e)
            this.props.onChange(e.target.checked) 
          },
        }),
        h(NetlifyDeploy,{}),
      ])
    )
  }
}

const flexWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
}
