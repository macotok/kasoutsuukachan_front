import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

class Login extends React.Component {
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
            ログイン
          </h2>
          <div className="m-form01">
            <div>
              <TextField
                label="ID"
                type="email"
                name="id"
                margin="normal"
                defaultValue=""
                fullWidth
                required
                className="m-form01-textField"
              />
            </div>
            <div>
              <TextField
                label="PASSWORD"
                type="password"
                name="password"
                margin="normal"
                defaultValue=""
                fullWidth
                required
                className="m-form01-textField"
              />
            </div>
            <div className="m-form01-btn">
              <Button variant="contained" color="primary">
                ログイン
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Login;
