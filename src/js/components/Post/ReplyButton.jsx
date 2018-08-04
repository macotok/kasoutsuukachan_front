import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDialog from '../Dialog/PostDialog';

class ReplyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  handleClickOpen() {
    this.setState({ isDialogOpen: true });
  }

  closeDialog() {
    this.setState({ isDialogOpen: false });
  }

  render() {
    const { isDialogOpen } = this.state;
    const { replyData } = this.props;
    return (
      <div>
        <p className="m-postsList-reply">
          <button type="button" className="m-postsList-link m-postsList-replyLink" onClick={this.handleClickOpen}>
            返信
          </button>
        </p>
        <PostDialog
          isOpen={isDialogOpen}
          closeDialog={this.closeDialog}
          replyData={isDialogOpen ? replyData : null}
        />
      </div>
    );
  }
}

ReplyButton.propTypes = {
  replyData: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, props) => {
  const { postId } = props;
  return {
    replyData: (state.post).find(s => s.id === postId),
  };
};

export default connect(mapStateToProps)(ReplyButton);
