import React, { Component } from 'react'
import wrapperStyle from './styles/wrapper'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter]


var myHeaders = new Headers({
  'Authorization': 'Bearer '+,
});

fetch("/.netlify/functions/get-cloudinary-hash")
      .then(res => res.json())
      .then((result)=>{
        //console.log(result);
      })


export default class Tags extends Component {  
  state = {
    tags: [],
    suggestions: []
  }

  componentDidMount = () => {
    //console.log("props",window.netlifyIdentity.currentUser());
    const { field, onChange, currentUser, value } = this.props;
    let tags = []
    value.map(x => {
      //console.log(x)
      tags.push({
        id: x,
        text: x,
      })
    })
    //console.log('tags',tags);
    this.setState({tags: tags});
    fetch("/tags/index.json")
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
    const { tags } = this.state
    const newTags = [...tags, tag]
    this.setState({ tags: newTags })
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

  render() {
    const { tags, suggestions } = this.state
    return h(
      "div",{
        style: wrapperStyle,
      },[
        h(ReactTags, {
          delimiters: delimiters,
          tags: tags,
          suggestions: suggestions,
          handleDelete: this.handleDelete,
          handleDrag: this.handleDrag,
          handleAddition: this.handleAddition,
          inputFieldPosition: "top",
        }),
      ]
    )
  }
}


