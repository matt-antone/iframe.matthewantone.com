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

  componentDidMount = () => {
    const { field, onChange, value } = this.props;
    let aliases = []
    value.map(x => {
      //console.log(x)
      aliases.push({
        id: x,
        text: x,
      })
    })
    this.setState({aliases: aliases});
    fetch("/aliases/index.json")
      .then(res => res.json())
      .then(
        (result) => {
          let i = 1
          const suggestions = result.map(x => { 
            const suggestion = {id: x, text: x}
            i++
            return suggestion 
          });
          this.setState({suggestions: suggestions})
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
        }),
      ]
    )
  }
}