import PropTypes from 'prop-types';
import React from 'react';

class ReplyText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextHide: true,
    };
    this.replyTextOpen = this.replyTextOpen.bind(this);
  }

  replyTextOpen() {
    const { isTextHide } = this.state;
    this.setState({ isTextHide: !isTextHide });
  }

  render() {
    const { replyData } = this.props;
    const { isTextHide } = this.state;
    const isMoreText = { display: isTextHide ? 'block' : 'none' };

    return (
      Object.values(replyData).length
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
              onClick={this.replyTextOpen}
              style={isMoreText}
            >
              もっと読む
            </button>
          </div>
        )
        : null
    );
  }
}

ReplyText.propTypes = {
  replyData: PropTypes.shape({}).isRequired,
};

export default ReplyText;
