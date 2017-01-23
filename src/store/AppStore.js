import Dispatcher from '../core/AppDispatcher';
import constants from '../constants/constants';
import BaseStore from './BaseStore';
import _ from 'lodash';
import Immutable from 'immutable';

// Facebook style store creation.
class AppStore extends BaseStore {
  data = []

  getData() {
    return this.data;
  }

  setPosts(newData) {
    this.data = newData;
  }

  // getStateValues(countryName) {
  //   return _.get(countryName ? _.find(this.data.get('countries'), { name: countryName }) : _.head(this.data.get('countries')), 'states', [])
  // }

  // getCountryValues() {
  //   return this.data.get('countries')
  // }

  // getPrice(countryName, stateName) {
  //   var country = _.find(this.data.get('countries'), { name: countryName })
  //   var state = country.states ? _.find(country.states, { name: stateName }) : null

  //   return _.pick(_.defaults({}, state, country), ['price', 'price2'])
  // }

  // setCountries(countries) {
  //   this.data = this.data.merge(Immutable.Map({countries: countries}))
  // }

}

const appStore = new AppStore();
Dispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case constants.SET_POST:
      appStore.setPosts(action.data);
      appStore.emitChange();
      break;
  }
});

export default appStore;
