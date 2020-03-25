import React, { Component } from 'react'
import TaxonomyPicker from './TaxonomyPicker'

export default class TagsPicker extends Component {
  render() {
    return h(TaxonomyPicker,{
      taxonomy: 'tags',
      value: this.props.value,
      onChange: this.props.onChange,
    })
  }
}
