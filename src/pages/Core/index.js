import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Completed from './completed';
import NeedsWork from './needsWork';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  title: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  secondaryTitle: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
});

class Core extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    jobs: []
  }

  async componentDidMount() {
    const res = await fetch(`https://deprecationbot.glamanate.com/view/Drupal%20core/api/json?tree=jobs[name,fullName,fullDisplayName,description,url,color]`);
    const json = await res.json();
    console.log(json);
    await this._setState(json)
  }
  async _setState(state) {
    return new Promise(res => this.setState(state, res));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography className={classes.title} component={`h1`} variant={`h3`}>Drupal core</Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography className={classes.secondaryTitle} variant={`h6`}>Needs work!</Typography>
            <NeedsWork jobs={this.state.jobs}/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.secondaryTitle} variant={`h6`}>Passing</Typography>
            <Completed jobs={this.state.jobs}/>
          </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Core);
