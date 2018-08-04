import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

class Regist extends React.Component {
  componentWillMount() {
    const { history } = this.props;
    if (history.action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="l-container">
          <h2 className="m-title01">
            アカウント登録
          </h2>
          <div>
            <TextField
              autoComplete="off"
              label="ID"
              type="text"
              name="id"
              margin="normal"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              autoComplete="off"
              label="PASSWORD"
              type="password"
              name="password"
              margin="normal"
              defaultValue=""
            />
          </div>
          <div>
            <Button variant="contained" color="primary">
              登録
            </Button>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Regist.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Regist;
