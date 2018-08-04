import React from 'react';
import PropTypes from 'prop-types';

class ReplyMoreText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextHide: true,
    };
    this.repqlyTextBool = this.repqlyTextBool.bind(this);
  }

  repqlyTextBool() {
    const { isTextHide } = this.state;
    this.setState({ isTextHide: !isTextHide });
  }

  render() {
    const { replyData } = this.props;
    const { isTextHide } = this.state;
    const isMOreText = { display: isTextHide ? 'block' : 'none' };

    return (
      replyData
        ? (
          <div className="m-modal02-postReply">
            <p className="m-modal02-postReply-number">
              {replyData.id}
            </p>
            <p className={`m-modal02-postReply-text ${isTextHide ? 'hide' : null}`}>
              {replyData.text}
            </p>
            <button
              type="button"
              className="m-modal02-postReply-button"
              onClick={this.repqlyTextBool}
              style={isMOreText}
            >
              もっと読む
            </button>
          </div>
        )
        : null
    );
  }
}

ReplyMoreText.propTypes = {
  replyData: PropTypes.shape({}),
};

ReplyMoreText.defaultProps = {
  replyData: {},
};

export default ReplyMoreText;
