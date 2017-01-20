import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   })).isRequired,
  // };

  render() {
    return (
      <div>
        <p>TEST 1243</p>
      </div>
    );
  }
}

export default withStyles(s)(Home);
