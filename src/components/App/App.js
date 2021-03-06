import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route } from "react-router-dom";
import withRoot from '../../withRoot';
import Header from '../Header'
import routes from '../../routes'
import { GetContrast, SetContrast } from '../../lib/contrast'


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

const contrast = GetContrast() || SetContrast("normal") || "normal"

if (contrast === 'high') {
  import('../../styles/highcontrast.min.css')
  .then(() => {console.log('Loaded Highcontrast CSS')});
} else if (contrast === 'low') {
  import('../../styles/lowcontrast.min.css')
  .then(() => {console.log('Loaded Lowcontrast CSS')});
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
