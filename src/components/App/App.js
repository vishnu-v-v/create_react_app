import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link } from "react-router-dom";
import withRoot from '../../withRoot';
import Landing from '../Landing'
import Header from '../Header'
import routes from '../../routes'
import './App.scss'


const styles = theme => ({
  root: {
    // textAlign: 'center',
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
});

class App extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className = { classes.root } >
        <Header/>
        {routes.routes.map((route, key) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={key}
            />
          );
        })}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
