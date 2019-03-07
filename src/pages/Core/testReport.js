import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

class TestReport extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired
    }
    state = {
        data: null,
    }

    async componentDidMount() {
        const { url } = this.props;
        const res = await fetch(`${url}lastBuild/testReport/api/json`);
        const data = await res.json();
        console.log(data);
        await this._setState({
            data
        })
      }
      async _setState(state) {
        return new Promise(res => this.setState(state, res));
      }

    render() {
        const { data } = this.state;
        if (data === null) {
            return <CircularProgress />
        }

        return <Typography>{this.state.data.failCount}</Typography>
    }
}

export default TestReport;
