import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import AppStore from '../../store/AppStore'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <div className={s.postContainer}>
          <span className={s.postTitle}>Title</span>
          <p className={s.postContent}>TEST 1243</p>
          <p>{AppStore.getData()}</p>
        </div> 
        <div className={s.postContainer}>
          <span className={s.postTitle}>Title</span>
          <p className={s.postContent}>TEST 1243</p>
          <TextField hintText='Post Content' />
          <RaisedButton label='Post' className={s.btnStyle} primary/>
        </div>   
      </div>
    );
  }
}

export default withStyles(s)(Home);
