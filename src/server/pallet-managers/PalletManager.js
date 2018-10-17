const _ = require('lodash');
/**
 * Provide class to help manage pallet
 *
 * **/

class PalletManager {
  constructor(RED, palletConfig, node) {
    this._self = node;

    this._self._processError = this._processError.bind(this._self);
    this._self._processSuccess = this._processSuccess.bind(this._self);
    this._self._process = this._process.bind(this._self);
    this._self.extendMsgPayload = this.extendMsgPayload.bind(this._self)
  }

  _processError(err) {
    const message  = _.isString(err) ? err : err.message;
    if(this._debugg) {
      this.error(message);
    }
    this.status({ fill:"red", shape:"dot", text: message});
  }
  _processSuccess(message) {
    this.status({ fill:"green", shape:"dot", text: message });
  }
  _process(message, fill = 'grey', shape = "dot") {
    this.status({ fill, shape, text: message });
  }

  extendMsgPayload(msg, object) {
    msg.payload = _.isObject(msg.payload) ? msg.payload : {};
    _.extend(msg.payload, object)
  }
}

module.exports = { PalletManager };
