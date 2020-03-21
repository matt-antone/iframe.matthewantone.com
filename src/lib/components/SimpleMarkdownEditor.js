import React from 'react';
// import Editor from '@toast-ui/editor';

import { Editor } from '@toast-ui/react-editor';


class SimpleMarkdownEditor extends React.Component {

  state = {
    text: this.props.text,
  }

  editorRef = React.createRef();

  handleClick = () => {
    this.editorRef.current.getInstance().exec('Bold');
  };

  handleChange = (e) => {
    this.props.handleChange(this.editorRef.current.getInstance().getMarkdown())
  }

  componentDidMount = (e) => {
    this.setState({text: this.props.text})
  }

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          initialValue={this.state.text}
          ref={this.editorRef}
          usageStatistics={false}
          events={{ change: this.handleChange } }
        />
      </>
    );
  }
}

export default SimpleMarkdownEditor

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

