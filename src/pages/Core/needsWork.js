import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import TestReport from './testReport';

const styles = (theme) => ({
    root: {
        textAlign: 'center',
      },
      progress: {
        margin: theme.spacing.unit * 2,
      },
      jobName: {
        fontWeight: 'bold',
        fontSize: '1rem',
      }
});

const Completed = (props) => {
    const { jobs, classes } = props;
    if (jobs.length === 0) {
        return (
            <div className={classes.centered}>
            <CircularProgress className={classes.progress} />
          </div>
        )
    }
    return (
      <Table>
        <TableHead>
          <TableRow>
          <TableCell align="left">Component</TableCell>
          <TableCell align="center">Failures</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {jobs.filter(row => row.color === 'red').map(row => (
            <TableRow key={row.name}>
              <TableCell>
                <Link className={classes.jobName} href={`${row.url}lastBuild/testReport`}>{row.fullName}</Link>
                <Typography>{row.description}</Typography>
              </TableCell>
              <TableCell align={`center`}><TestReport url={row.url}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
Completed.propTypes = {
    jobs: PropTypes.array.isRequired
}
export default withStyles(styles)(Completed);
