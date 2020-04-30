import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import { WithContext as ReactTags } from 'react-tag-input'
import TaxonomyItem from './TaxonomyItem'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default class Taxonomy extends Component {  
  state = {
    taxonomy: '',
    taxonomies: [],
    suggestions: [],
  }

  componentDidMount = () => {
    const { value } = this.props;
    let taxonomies = []
    //console.log('this.props.value',value);
    // Set Value
    if(typeof(value) !== 'undefined'){
      // transform value for use with ReactTags
      value.map(x => {
        taxonomies.push({
          id: x,
          text: x,
        })
      })
      this.setState({taxonomies: taxonomies});  
    }else{
      this.props.onChange([])
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
            //console.log(result.taxonomies,this.props.taxonomy,result.taxonomies[this.props.taxonomy]);
            let i = 1
            const suggestions = result.taxonomies[this.props.taxonomy].map(x => { 
              const suggestion = {id: x, text: x}
              i++
              return suggestion 
            });
            this.setState({suggestions: suggestions})
            // this.setState({suggestionsText: this.renderSuggestionsText(suggestions)})
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

  handleCMSChange = (newTaxonomy) => {
    const { taxonomies } = this.state
    let newVal = []
    newTaxonomy.map(x => newVal.push(x.text));
    this.props.onChange(newVal)
  }

  handleDelete = (i) => {
    const { taxonomies } = this.state
    const newTaxonomy = taxonomies.filter((taxonomiesItem, index) => index !== i)
    this.setState({
     taxonomies: newTaxonomy,
    })

    this.handleCMSChange(newTaxonomy)
    let cmsValue = [];
  }

  handleAddition = (taxonomiesItem) => {
    const { taxonomies, suggestions, suggestionsText } = this.state
    //console.log('handleAddition',taxonomies,taxonomiesItem);
    if(!taxonomies.includes(taxonomiesItem)){
      const newTaxonomies = [...taxonomies, taxonomiesItem]
      //console.log('newTaxonomies',newTaxonomies)
      
      if(newTaxonomies.length){
        this.setState({ 
          taxonomies: newTaxonomies,
          // suggestions: newSuggestions,
        })
        this.handleCMSChange(newTaxonomies)  
      }  
    }
  }

  handleDrag = (taxonomiesItem, currPos, newPos) => {
      const taxonomies = [...this.state.taxonomies]
      const newTaxonomy = taxonomies.slice()

      newTaxonomy.splice(currPos, 1)
      newTaxonomy.splice(newPos, 0, taxonomiesItem)

      // re-render
      this.setState({ taxonomies: newTaxonomy })
  }

  getSuggestionButtons = () => {
    const { suggestions } = this.state
    let buttons = []
    suggestions.map( sug => {
      let name = sug.text
      //console.log("name",name)
      if(typeof(name) !== 'undefined' && name !== 'undefined' && (!this.props.value.includes(name))){
        //console.log('suggestion',sug.text);
        const name = sug.text
        buttons[buttons.length] = h('button',{
          value: name,
          onClick: (e) => {this.handleAddition({id: e.target.value, text: e.target.value})},
        },name)
      }
    })
    return buttons  
    return ''
  }

  render() {
    const { taxonomies, suggestions } = this.state
    //console.log(suggestions);
    return h("div",{
        style: wrapperStyle,
        },h('div',{
          style: flexContainerTagStyle
        }, [
            h(ReactTags, {
              delimiters: delimiters,
              tags: taxonomies,
              suggestions: suggestions,
              handleDelete: this.handleDelete,
              handleDrag: this.handleDrag,
              handleAddition: this.handleAddition,
              inputFieldPosition: "top",
              placeholder: "Add a Category",
              autofocus: false,
              style: flexContainerTagColumnStyle,
            }),
            h('div',{
              style: flexContainerTagColumnStyle
            },[
              h('p',{},[h('strong',{},'Suggestions:')]),
              this.getSuggestionButtons(suggestions),
            ])
          ]
        )
    )
  }
}

import {flexContainerTagStyle, flexContainerTagColumnStyle} from './styles/flexContainerTags';
