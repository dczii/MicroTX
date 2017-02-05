/**
 * MicroTX Header File
 * Created by: Danilo Zabala II
 * 2017
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { Row, Col, Grid } from 'react-bem-grid'
import _ from 'lodash'
import FlatButton from 'material-ui/FlatButton'

class Header extends React.Component {
	//Render state at first load
	constructor(props) {
	    super(props);
	    this.state = {
	      pages: [{
	      	title: 'Home',
	      	link: ''
	      },{
	      	title: 'About',
	      	link: ''
	      },{
	      	title: 'Contact',
	      	link: ''
	      }]
	    };
	  }  
  render() {
    return (
    		<Row className={s.headerContainerStyle}>
    			<Col xs={3} className={s.headerBarStyle}>
    				<FlatButton label='MictroTx' className={s.logoStyle}
    					style={{height: 50}}
    					labelStyle={{fontSize: 24, color: 'white'}}/>
    			</Col>
    			<Col xs={8} className={s.headerComponentsStyle}>
					{_.map(this.state.pages, (page, idx) => {
						return(
							<FlatButton key={idx} label={page.title}
		    					labelStyle={{color: 'white'}}
		    					style={{height: 50}}
		    					hoverColor='#07889B'/>
						);
					})}
    			</Col>
    		</Row>
    );
  }
}

export default withStyles(s)(Header);
