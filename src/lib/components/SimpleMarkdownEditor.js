import React from 'react';
// import Editor from '@toast-ui/editor';
import { Editor } from '@toast-ui/react-editor';



// Step 1: Define the user plugin function
function youtubePlugin() {
  // console.log('youtubePlugin')
  Editor.codeBlockManager.setReplacer('youtube', function(youtubeId) {
    // Indentify multiple code blocks
    const wrapperId = `yt${Math.random()
      .toString(36)
      .substr(2, 10)}`;

    // Avoid sanitizing iframe tag
    setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);

    return `<div id="${wrapperId}"></div>`;
  });
}

function renderYoutube(wrapperId, youtubeId) {
  const el = document.querySelector(`#${wrapperId}`);

  el.innerHTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${youtubeId}"></iframe>`;
}



class SimpleMarkdownEditor extends React.Component {

  state = {
    text: this.props.text,
  }

  editorRef = React.createRef();

  handleClick = () => {
    this.editorRef.current.getInstance().exec('Bold');
  };

  handleChange = (e) => {
    // console.log("sEditor",this.editorRef.current.getInstance().getMarkdown())
    this.props.handleChange(this.editorRef.current.getInstance().getMarkdown())
  }

  componentDidMount = (e) => {
    this.setState({text: this.props.text})
  }

  render() {
    // console.log('sEditor',this.props);
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="200px"
          initialEditType="wysiwyg"
          initialValue={ this.props.text }
          ref={this.editorRef}
          usageStatistics={false}
          events={{ change: this.handleChange } }
          exts={[youtubePlugin]}
          toolbarItems={ [
            'heading',
            'bold',
            'italic',
            // 'strike',
            // 'divider',
            // 'hr',
            // 'quote',
            // 'divider',
            // 'ul',
            // 'ol',
            // 'task',
            // 'indent',
            // 'outdent',
            // 'divider',
            // 'table',
            // 'image',
            // 'link',
            // 'divider',
            // 'code',
            // 'codeblock',
            // 'divider',
          ]}
        />
      </>
    )        
  }
}

export default SimpleMarkdownEditor

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

