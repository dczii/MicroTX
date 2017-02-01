import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import AppStore from '../../store/AppStore';
import AppAction from '../../action/AppAction';
import _ from 'lodash'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      view: 'lists',
      selectedData: {
        title: 'test',
        content: 'bla',
        comment: [],
      },
      comment: {
        name: '',
        body: ''
      },
      data: []
    };
  }  

  componentDidMount() {
    AppStore.addChangeListener(this.onAppStoreChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onAppStoreChange);
  }

  onAppStoreChange = () => {
    let newData =  AppStore.getData();
    let newSelectedData = {}
    if(this.state.selectedData) {
      newSelectedData = _.find(newData, (data) => data.title == this.state.selectedData.title)
    }
    this.setState({data: newData, selectedData: newSelectedData})
  }

  //Set value for the Text Fields
  onTextChange = (field, e, i , v) => {
    let newValue = _.set(this.state, field, e.target.value)
    this.setState(newValue)
  }

  //Function when Post Button is clicked
  onPost = () => {
    let newData = this.state.data
    newData.push({title: this.state.title, content: this.state.content, comment: []})
    this.setState({data: newData, title: '', content: ''},
      AppAction.setPost(this.state.data))
  }

  //Function when a post is Selected
  onSelectPost = (title, content, comment) => {
    let selectedData = {
      title: title,
      content: content,
      comment: comment
    }
    this.setState({selectedData: selectedData, view: 'singlePost'})
  }

  //Function when commment fields change
  onCommentChange = (field, e) => {
    let comment = this.state.comment
    this.setState(_.set(comment, field, e.target.value))
  }

  //Function when commenting
  onPostComment = () => {
    let comment = this.state.comment
    let data = this.state.data
    let selectedData = this.state.selectedData

    //push posts comment to store
    let dataIdx = _.findIndex(data, (d) => d.title==selectedData.title)
    data[dataIdx].comment.push({name: comment.name, body: comment.body})
    this.setState({comment: {name: '', body: ''}},
      AppAction.setPost(data))
  }

  //function to delete post
  onDeletePost = (title) => {
    let data = _.reject(this.state.data, (data) => data.title == title)
    AppAction.setPost(data)
  }

  //function to delete comment
  onDeleteComment = (name) => {
    let data = this.state.data
    let idx = _.findIndex(data, (d) => d.title == this.state.selectedData.title)
    let comment = _.reject(data[idx].comment, (d) => d.name == name)
    let newData = _.set(data, [idx]+'.comment', comment)
    AppAction.setPost(newData)
  }

  render() {
    return (
      this.state.view === 'lists' ? 
        <div>
          {/*List of Posts*/}
            {_.map(this.state.data, (data, idx) => {
              return(
                <div key={idx} className={s.postsContainer}>
                  <p className={s.postTitle}
                    onClick={this.onSelectPost.bind(this, data.title, data.content, data.comment)}>
                    {_.camelCase(data.title)}
                  </p>
                  <span className={s.postContent}>{data.content}</span>
                  <RaisedButton label="X" className={s.delBtnStyle} 
                    onClick={this.onDeletePost.bind(this, data.title)}/>
                </div>
              );
            })}
          {/*List of Posts*/}
          <div className={s.postsContainer}>
            <TextField hintText="Post Title" fullWidth 
              value={this.state.title}
              onChange={this.onTextChange.bind(this, 'title')}
            />
            <TextField hintText="Post Content" fullWidth 
              value={this.state.content}
              onChange={this.onTextChange.bind(this, 'content')}
            />
            <RaisedButton label="Post" className={s.btnStyle} primary 
              onClick={this.onPost.bind(this)}/>
          </div>
        </div>
        :
          <div>
            <RaisedButton label='Back'
              onClick={() => this.setState({view: 'lists'})}/>
            <div className={s.postContainer}>
              <p className={s.postTitle}>
                {_.camelCase(this.state.selectedData.title)}
              </p>
              <span className={s.postContent}>{this.state.selectedData.content}</span>
            </div>
            {/*Comments Section*/}
            <div className={s.commentSectionContainer}>
              {_.map(this.state.selectedData.comment, (comment, idx) => {
                return(
                  <div key={idx} className={s.commentContainer}>
                    <div style={{verticalAlign: 'middle'}}>
                      <span className={s.commentTitle}>{comment.name}</span>
                      <span className={s.comment}>{comment.body}</span>
                    </div>
                    <FlatButton label="X" style={{float: 'right'}}
                      onClick={this.onDeleteComment.bind(this, comment.name)}/>
                  </div>
                );
              })}
              <div>
                <TextField fullWidth
                  hintText='Write your name'
                  value={this.state.comment.name}
                  onChange={this.onCommentChange.bind(this, 'name')}
                />
                <TextField fullWidth
                  hintText='Write a comment...'
                  value={this.state.comment.body}
                  onChange={this.onCommentChange.bind(this, 'body')}
                />
                <RaisedButton
                  label='Post Comment'
                  onClick={this.onPostComment.bind(this)}
                />
              </div>
            </div>
          </div>        
    );
  }
}

export default withStyles(s)(Home);
