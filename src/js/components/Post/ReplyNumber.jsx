/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ReplyConfirmDialog from '../Dialog/ReplyConfirmDialog';

class ReplyNumber extends React.Component {
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
    const { replyData, replyNumber } = this.props;
    return (
      <div>
        <p className="m-postsList-replyNum">
          <button type="button" className="m-postsList-replyNum-link" onClick={this.handleClickOpen}>
            {replyNumber}
          </button>
        </p>
        <ReplyConfirmDialog
          isOpen={isDialogOpen}
          closeDialog={this.closeDialog}
          replyData={replyData}
        />
      </div>
    );
  }
}

ReplyNumber.propTypes = {
  replyData: PropTypes.shape({}).isRequired,
  replyNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => {
  const { replyNumber } = props;
  return {
    replyData: state.post.find(p => p.id === replyNumber),
  };
};

export default connect(mapStateToProps)(ReplyNumber);
