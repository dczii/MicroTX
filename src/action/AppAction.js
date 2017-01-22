import AppDispatcher from '../core/AppDispatcher';
import constants from '../constants/constants';
import Promise from 'promise';
const agent = require('superagent-promise')(require('superagent'), Promise);

class CountryActions {

  // get countries only once and cache it in memory
  countries = null

  // getCountries = () => {
  //   if (this.countries) {
  //     AppDispatcher.dispatch({
  //       type: constants.COUNTRY_CHANGE_EVENT,
  //       values: this.countries
  //     })
  //   } else {
  //     agent('GET', '/api/v1/countries')
  //       .then((res) => {
  //         this.countries = res.body.data.countries
  //         this.getCountries()
  //       })
  //   }
  // }
}

export default new CountryActions();
