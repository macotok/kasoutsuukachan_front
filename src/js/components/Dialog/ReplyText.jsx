import React from 'react';
import PropTypes from 'prop-types';

class ReplyText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextHide: true,
    };
    this.repqlyTextOpen = this.repqlyTextOpen.bind(this);
  }

  repqlyTextOpen() {
    const { isTextHide } = this.state;
    this.setState({ isTextHide: !isTextHide });
  }

  render() {
    const { replyData } = this.props;
    const { isTextHide } = this.state;
    const isMOreText = { display: isTextHide ? 'block' : 'none' };

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
              onClick={this.repqlyTextOpen}
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

ReplyText.propTypes = {
  replyData: PropTypes.shape({}).isRequired,
};

export default ReplyText;
