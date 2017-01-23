import AppDispatcher from '../core/AppDispatcher';
import constants from '../constants/constants';

class AppActions {

  setPost = (data) => {
      // return {
      //   type: constants.SET_POST,
      //   payload: data
      // };
    AppDispatcher.handleAction({
      actionType: constants.SET_POST,
      data: data
    })
  }


}

export default new AppActions();
