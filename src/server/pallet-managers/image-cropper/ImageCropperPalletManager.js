const { PalletManager } = require('../PalletManager');

/**
 * Provide class to help manage pallet
 *
 * **/
class ImageCropperPalletManager extends PalletManager{
  constructor(RED, palletConfig, node) {
    super(RED, palletConfig, node);

    this._self.value = palletConfig.value;
    this._self.palletType = 'apiko-image-cropper';

    this.onInput = this.onInput.bind(this._self);
  }


  /**
   * Provide on input event
   * to receive messages from the up-stream nodes in a flow
   * @params
   *       {object}
   * @return -> to return some message for next node in flow use
   *      this.send(msg);
   * **/
  onInput(msg) {
    try {
      const { value, name } = this;

      if(!name) {
        this._processError("Should be name");
        return;
      }
      this.extendMsgPayload(msg, {
        // extend here
      })
    } catch (error) {
      this._processError(error);
      this.error(error);
    }
  }
}

module.exports = { ImageCropperPalletManager };
