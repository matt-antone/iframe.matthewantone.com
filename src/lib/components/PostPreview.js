import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import CMSconfig from '../config/config'
import WidgetPreviewContainer from './netlify-cms-ui-default/src/WidgetPreviewContainer';

export default class PostPreview extends Component {

  getFeaturedImage = () => {
    const { entry } = this.props
    const images = entry.getIn(['data', 'images'])
    const showFeaturedImage = entry.getIn(['data', 'options']).showFeaturedImage
    if(showFeaturedImage){
      return <Image style={itemStyle} className={'featured-image'} cloudName="bugo" publicId={images[0].split(/[\\/|.]/).slice(-2, -1)[0]} width="1200" crop="scale" />
    }
    console.log('preview images', images);
  }
  
  render() {
    const { entry, widgetFor } = this.props

    const DatePreview = ({ value }) => (
      <WidgetPreviewContainer>{value ? value.toString() : null}</WidgetPreviewContainer>
    );

    return (
      <div className={'post-preview'}>
        <time style={timeCss}><DatePreview value={entry.getIn(['data', 'date'])}/></time>
        <h1 style={h1Css}>{ entry.getIn(['data', 'title']) }</h1>
        <div>
          { this.getFeaturedImage() }
          { widgetFor('body') }
        </div>
      </div>
    )
  }
}

const itemStyle = {
  maxWidth: "100%",
  height: "auto",
}

const timeCss = {
  fontSize: '0.85rem',
}

const h1Css = {
  fontSize: '3rem',
}




// var PostPreview = createClass({
//   render: function() {
//     var entry = this.props.entry;
//     var image = entry.getIn(['data', 'image']);
//     var bg = this.props.getAsset(image);
//     return h('div', {},
//       h('h1', {}, entry.getIn(['data', 'title'])),
//       h('img', {src: bg.toString()}),
//       h('div', {"className": "text"}, this.props.widgetFor('body'))
//     );
//   }
// });

