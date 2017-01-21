import EventEmitter from 'eventemitter3'
 
var CHANGE_EVENT = 'change'
 
class BaseStore extends EventEmitter {
 
  constructor() {
    super()
  }
 
  // Allow Controller-View to register itself with store
  addChangeListener = (callback, changeEvent) => {
    this.on(changeEvent ? changeEvent : CHANGE_EVENT, callback)
    return callback
  }
 
  removeChangeListener = (callback, changeEvent) => {
    this.removeListener(changeEvent ? changeEvent : CHANGE_EVENT, callback)
  }
 
  // triggers change listener above, firing controller-view callback
  emitChange = (changeEvent) => {
    this.emit(changeEvent ? changeEvent : CHANGE_EVENT)
  }
}
 
export default BaseStore