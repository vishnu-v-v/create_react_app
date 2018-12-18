import { AppBar, Button, Menu, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ArrowDropDown } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from "react-intl";
import { SetLocale } from '../lib/locale';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 0
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
    minHeight: 20,
    paddingRight: 50
  },
  toolbarButtons: {
    fontSize: 10,
    textTransform: 'none'
  },
  accessibilityMenu: {
    padding: 0,
  },
  accessibility: {
    padding: 40,
  },
  accessibilityHeading: {
    fontSize: 17,
    color: '#767676'
  },
  linkToAccessibility: {
    color: '#636363'
  },
  highContrast: {
    backgroundColor: '#000',
    color: '#ff0',
  },
  normalContrast: {
    backgroundColor: '#fafafa',
    color: '#333',
  },
  softContrast: {
    backgroundColor: '#cfe5fc',
    color: '#006',
  },
  contrastItem: {
    margin: 5,
    justifyContent: 'space-around'
  },
  highContrastMenuItem: {
    '&:hover': {
      backgroundColor: '#000'
    }
  },
  normalContrastMenuItem: {
    '&:hover': {
      backgroundColor: '#fafafa'
    }
  },
  softContrastMenuItem: {
    '&:hover': {
      backgroundColor: '#cfe5fc'
    }
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
              onClose={this.handleClose}
              dense={true}
              className={classes.accessibilityMenu}>
              <div className={classes.paper}>
                <Paper className={classes.accessibility}>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.accessibilityHeading}
                    noWrap
                  >
                    Change Color Style:
                  </Typography>
                  <MenuItem className={`${classes.contrastItem} ${classes.highContrastMenuItem} ${classes.highContrast}`}>
                    <Typography className={classes.highContrast} align="center" variant="h6">
                      High Contrast
                    </Typography>
                  </MenuItem>
                  <MenuItem className={`${classes.contrastItem} ${classes.normalContrastMenuItem} ${classes.normalContrast}`}>
                    <Typography className={classes.normalContrast} align="center" variant="h6">
                      Normal Style
                    </Typography>
                  </MenuItem>
                  <MenuItem className={`${classes.contrastItem} ${classes.softContrastMenuItem} ${classes.softContrast}`}>
                    <Typography className={classes.softContrast} align="center" variant="h6">
                      Soft Contrast
                    </Typography>
                  </MenuItem>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.accessibilityHeading}
                    noWrap
                  >
                    Read more about <a className={classes.linkToAccessibility} href={'https://www.floridablue.com/general/web-accessibility'}>
                      Web Accessibility
                    </a>
                  </Typography>
                </Paper>
              </div>
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
