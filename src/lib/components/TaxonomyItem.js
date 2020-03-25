import React, { Component } from 'react'

export default class TaxonomyItem extends Component {
  render() {
    console.log('TaxonmyItem',this.props,h);
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
