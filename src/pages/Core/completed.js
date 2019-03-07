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

const styles = (theme) => ({
    root: {
        textAlign: 'center',
      },
      progress: {
        margin: theme.spacing.unit * 2,
      },
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
          <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {jobs.filter(row => row.color === 'blue').map(row => (
            <TableRow key={row.name}>
              <TableCell><Link href={row.url}>{row.fullName}</Link></TableCell>
              <TableCell>Passing</TableCell>
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
