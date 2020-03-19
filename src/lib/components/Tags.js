import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import { WithContext as ReactTags } from 'react-tag-input'
import {flexContainerTagStyle, flexContainerTagColumnStyle} from './styles/flexContainerTags';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default class Tags extends Component {  
  state = {
    tags: [],
    suggestions: [],
    suggestionsText: '',
  }

  componentDidMount = () => {
    const { field, onChange, value } = this.props;
    let tags = []

    // Set Value
    if(typeof(value) !== 'undefined'){
      // transform value for use with ReactTags
      value.map(x => {
        tags.push({
          id: x,
          text: x,
        })
      })
      this.setState({tags: tags});  
    }

    if(!this.state.suggestions.length){
      let requestHeaders = new Headers();
      requestHeaders.append('pragma', 'no-cache');
      requestHeaders.append('cache-control', 'no-cache');

      const requestConfig = {
        method: 'GET',
        headers: requestHeaders,
      };

      const request = new Request("/index.json");

      // Set Suggestions
      fetch(request,requestConfig)
        .then(res => res.json())
        .then(
          (result) => {
            let i = 1
            const suggestions = result.taxonomies.tags.map(x => { 
              const suggestion = {id: x, text: x}
              i++
              return suggestion 
            });
            this.setState({suggestions: suggestions})
            this.setState({suggestionsText: this.renderSuggestionsText(suggestions)})
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

  handleCMSChange = (newTags) => {
    const { tags } = this.state
    let newVal = []
    newTags.map(x => newVal.push(x.text));
    this.props.onChange(newVal)
  }

  handleDelete = (i) => {
    const { tags } = this.state
    const newTags = tags.filter((tag, index) => index !== i)
    this.setState({
     tags: newTags,
    })

    this.handleCMSChange(newTags)
    let cmsValue = [];
  }

  handleAddition = (tag) => {
    const { tags, suggestions, suggestionsText } = this.state
    const newTags = [...tags, tag]
    const newSuggestions = [...suggestions, tag]
    const newSuggestionsText = suggestionsText.toString() +', '+ tag.text
    console.log('newSuggestionsText',newSuggestionsText)
    this.setState({ 
      tags: newTags,
      suggestions: newSuggestions, 
      suggestionsText: newSuggestionsText
    })
    this.handleCMSChange(newTags)
  }

  handleDrag = (tag, currPos, newPos) => {
      const tags = [...this.state.tags]
      const newTags = tags.slice()

      newTags.splice(currPos, 1)
      newTags.splice(newPos, 0, tag)

      // re-render
      this.setState({ tags: newTags })
  }

  renderSuggestionsText = (arr) => {
    let suggestions = []
    arr.map( sug => {
      suggestions[suggestions.length] = sug.text
    })
    return suggestions.join(', ')
  }

  render() {
    const { tags, suggestions } = this.state
    return h("div",{
        style: wrapperStyle,
        },h('div',{
          style: flexContainerTagStyle
        }, [
            h(ReactTags, {
              delimiters: delimiters,
              tags: tags,
              suggestions: suggestions,
              handleDelete: this.handleDelete,
              handleDrag: this.handleDrag,
              handleAddition: this.handleAddition,
              inputFieldPosition: "top",
              placeholder: "Add a Tag",
              autofocus: false,
              style: flexContainerTagColumnStyle,
            }),
            h('div',{
              style: flexContainerTagColumnStyle
            },[
              h('p',{},[h('strong',{},'Suggestions:'),h('br'),this.state.suggestionsText]),
            ])
          ]
        )
    )
  }
}