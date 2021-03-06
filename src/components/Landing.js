import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';
import { AccessAlarm } from '@material-ui/icons';
import { injectIntl } from "react-intl";

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: 'black',
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    // padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    background: 'dodgerblue',
    color: 'white',
    padding: '20%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  orCircle: {
    position: 'relative',
    top: '-80px',
    right: '-240px',
    borderRadius: '50%',
    backgroundColor: 'skyblue',
    display: 'inline',
    fontSize: '30px',
    padding: '30px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  categoryIcons: {
    width: '6em',
    height: '4em',
    [theme.breakpoints.down('sm')]: {
      width: '8em',
      height: '7em',
    }
  },
  cardTitle: {
    color: 'white'
  }
});

const cards = [1, 2, 3, 4];

const Landing = (props) => {
  const { classes, intl } = props;
  const messages = intl.messages;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Search />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <div className={classes.heroContent}>
            <Typography className={classes.orCircle} component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
              OR
            </Typography>
            <Typography component="h5" variant="h6" align="center" gutterBottom>
              {messages.a}
            </Typography>
          </div>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image title">
                    <AccessAlarm className={classes.categoryIcons}/>
                    <Typography variant="h4" align="center" className={classes.cardTitle}>
                      Title
                    </Typography>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(injectIntl(Landing));