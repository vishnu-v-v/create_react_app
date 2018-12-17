import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  MenuList
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {
  ArrowDropDown
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import {injectIntl} from "react-intl";
import {SetLocale} from '../lib/locale';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    position: 'static',
    height: '35px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 12
  },
  toolbar: {
    minHeight: 20
  },
  toolbarButtons: {
    fontSize: 10
  }
});

class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleClick = (evt) => {
    this.setState({anchorEl: evt.currentTarget});
  };

  ToggleLanguage = (language) => {
    SetLocale(language);
    window
      .location
      .reload();
  }

  render() {
    const {classes, intl} = this.props;
    const {anchorEl} = this.state;
    const translate_to = intl.locale === 'es'
      ? 'en'
      : 'es'
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}>
              FloridaBlue.com
            </Typography>
            <Button
              size="small"
              className={classes.toolbarButtons}
              aria-owns={anchorEl
              ? 'simple-menu'
              : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}>
              Accessibility
              <ArrowDropDown className={classes.rightIcon}/>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}>
              <Paper>
                <MenuList>
                  <MenuItem>
                    <Typography variant="inherit">A short message</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="inherit">A very long text that overflows</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="inherit" noWrap>
                      A very long text that overflows
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Paper>

              {/* <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem> */}
            </Menu>
            <Button
              size="small"
              className={classes.toolbarButtons}
              onClick={() => {
              this.ToggleLanguage(translate_to)
            }}>
              {intl.locale === 'es'
                ? 'English'
                : 'Español'}
            </Button>
            <Button size="small" className={classes.toolbarButtons}>
              Support
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(Header));
