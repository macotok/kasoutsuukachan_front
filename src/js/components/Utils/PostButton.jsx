import React from 'react';
import PostDialog from './PostDialog';

class PostButton extends React.Component {
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
        <button type="button" className="m-header02-icon" onClick={this.handleClickOpen}>
          &#xf12c;
        </button>
        <PostDialog
          isOpen={isDialogOpen}
          closeDialog={this.closeDialog}
        />
      </div>
    );
  }
}

export default PostButton;
