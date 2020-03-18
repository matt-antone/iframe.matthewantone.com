import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default class Categories extends Component {  
  state = {
    categories: [],
    suggestions: []
  }

  componentDidMount = () => {
    const { field, onChange, value } = this.props;
    let categories = []

    // Set Value
    if(typeof(value) !== 'undefined'){
      // transform value for use with ReactTags
      value.map(x => {
        categories.push({
          id: x,
          text: x,
        })
      })
      this.setState({categories: categories});  
    }

    if(!this.state.suggestions.length){

      // Set Suggestions
      fetch("/index.json")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            let i = 1
            const suggestions = result.taxonomies.categories.map(x => { 
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
  }

  handleCMSChange = (newCategories) => {
    const { categories } = this.state
    let newVal = []
    newCategories.map(x => newVal.push(x.text));
    this.props.onChange(newVal)
  }

  handleDelete = (i) => {
    const { categories } = this.state
    const newCategories = categories.filter((category, index) => index !== i)
    this.setState({
     categories: newCategories,
    })

    this.handleCMSChange(newCategories)
    let cmsValue = [];
  }

  handleAddition = (category) => {
    const { categories } = this.state
    const newCategories = [...categories, category]
    this.setState({ categories: newCategories })
    this.handleCMSChange(newCategories)
  }

  handleDrag = (category, currPos, newPos) => {
      const categories = [...this.state.categories]
      const newCategories = categories.slice()

      newCategories.splice(currPos, 1)
      newCategories.splice(newPos, 0, category)

      // re-render
      this.setState({ categories: newCategories })
  }

  render() {
    const { categories, suggestions } = this.state
    return h(
      "div",{
        style: wrapperStyle,
      },[
        h(ReactTags, {
          delimiters: delimiters,
          tags: categories,
          suggestions: suggestions,
          handleDelete: this.handleDelete,
          handleDrag: this.handleDrag,
          handleAddition: this.handleAddition,
          inputFieldPosition: "top",
          placeholder: "Add a Category",
        }),
      ]
    )
  }
}