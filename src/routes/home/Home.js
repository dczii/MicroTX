// Created by: Danilo Zabala II
// Last updated: 02-03-2017
// Updates:
//   1. Set-up forms

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
// import AppStore from '../../store/AppStore';
// import AppAction from '../../action/AppAction';
import _ from 'lodash'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      selectValue: '',
    };
  }  

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  // onAppStoreChange = () => {
  // }

  //Function for change of select field value
  onFieldChange = (e, i, value) => {
    this.setState({selectValue: value})
  }

  //Funtion for Edit/Save Button
  onEdit = () => {
    let newEdit = this.state.editable
    this.setState({editable: !newEdit})
  }
  
  render() {
    return (
      <div className={s.mainContainer}>
      {/*Form*/}
        <p>Text Field:</p>
        <TextField  hintText='Hint Text' disabled={!this.state.editable}
          underlineStyle={{display: this.state.editable ? '' : 'none'}}/>
        <p>Select Field:</p>
        <SelectField value={1} onChange={this.onFieldChange.bind(this)} disabled={!this.state.editable}
          underlineStyle={{display: this.state.editable ? '' : 'none'}}
          iconStyle={{display: this.state.editable ? '' : 'none'}}>
          <MenuItem value={1} primaryText='Select Field Value' />
        </SelectField>

      {/*Edit Button*/}
        <RaisedButton primary label={this.state.editable ? 'SAVE' : 'EDIT'} className={s.btnStyle}
          onClick={this.onEdit.bind(this)}/>
      </div>
                
    );
  }
}

export default withStyles(s)(Home);
