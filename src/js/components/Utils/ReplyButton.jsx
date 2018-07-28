import React from 'react';
import PostDialog from './PostDialog';

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
        />
      </div>
    );
  }
}

export default ReplyButton;
