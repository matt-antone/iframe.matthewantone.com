import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default class Aliases extends Component {  
  state = {
    aliases: [],
    suggestions: []
  }


  handleCMSChange = (newAliases) => {
    const { aliases } = this.state
    let newVal = []
    newAliases.map(x => newVal.push(x.text));
    this.props.onChange(newVal)
  }

  handleDelete = (i) => {
    const { aliases } = this.state
    const newAliases = aliases.filter((alias, index) => index !== i)
    this.setState({
     aliases: newAliases,
    })

    this.handleCMSChange(newAliases)
    let cmsValue = [];
  }

  handleAddition = (alias) => {
    const { aliases } = this.state
    const newAliases = [...aliases, alias]
    this.setState({ aliases: newAliases })
    this.handleCMSChange(newAliases)
  }

  handleDrag = (alias, currPos, newPos) => {
      const aliases = [...this.state.aliases]
      const newAliases = aliases.slice()

      newAliases.splice(currPos, 1)
      newAliases.splice(newPos, 0, alias)

      // re-render
      this.setState({ aliases: newAliases })
  }

  componentDidMount = () => {
    const { field, onChange, value } = this.props;
    let aliases = []

    // Set Value
    if(typeof(value) !== 'undefined'){
      // transform value for use with ReactTags
      value.map(x => {
        aliases.push({
          id: x,
          text: x,
        })
      })
      this.setState({aliases: aliases});  
    }
  }

  render() {
    const { aliases, suggestions } = this.state
    return h(
      "div",{
        style: wrapperStyle,
      },[
        h(ReactTags, {
          delimiters: delimiters,
          tags: aliases,
          suggestions: suggestions,
          handleDelete: this.handleDelete,
          handleDrag: this.handleDrag,
          handleAddition: this.handleAddition,
          inputFieldPosition: "top",
          placeholder: "Add a Alias",
          autofocus: false,
        }),
      ]
    )
  }
}