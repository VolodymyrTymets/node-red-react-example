const { PalletManager } = require('../PalletManager');

/**
 * Provide class to help manage pallet
 *
 * **/
  class ImageGalleryPalletManager extends PalletManager{
  constructor(RED, palletConfig, node) {
    super(RED, palletConfig, node);

    this._self.url = palletConfig.url;
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
      const { url } = this;
      if(!url) {
        this._processError("Should be url");
        return;
      }
      this.extendMsgPayload(msg, { url });
      this.send(msg);
    } catch (error) {
      this._processError(error);
      this.error(error);
    }
  }
}

module.exports = { ImageGalleryPalletManager };
