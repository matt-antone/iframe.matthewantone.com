import React, { Component } from 'react'
import TaxonomyPicker from './TaxonomyPicker'

export default class CategoriesPicker extends Component {
  render() {
    return h(TaxonomyPicker,{
      taxonomy: 'categories',
      value: this.props.value,
      onChange: this.props.onChange,
    })
  }
}
