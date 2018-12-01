import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Autocomplete from './Autocomplete'

const styles = theme => ({
  layout: {
    width: 'auto',
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      height: '50vh',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      paddingTop: '12%',
    },
    paddingTop: '50%',
  },
  searchButton: {
    color: 'white',
    backgroundColor: 'green'
  }
});

function Search(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main className={classes.mainGrid}>
          <Grid container
            alignContent="space-around"
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={16}>
            <Grid item md={5} xs={12}>
              <Autocomplete/>
            </Grid>
            <Grid item md={2} xs={12}>
              <Autocomplete/>
            </Grid>
            <Grid item md={2} xs={12}>
              <Autocomplete/>
            </Grid>
            <Grid item md={3} xs={12}>
              <Button fullWidth className={classes.searchButton}>Search</Button>
            </Grid>
          </Grid>
        </main>
      </div>
    </React.Fragment>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);