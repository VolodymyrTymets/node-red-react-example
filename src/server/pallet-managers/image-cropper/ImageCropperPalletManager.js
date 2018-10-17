const { PalletManager } = require('../PalletManager');

/**
 * Provide class to help manage pallet
 *
 * **/
class ImageCropperPalletManager extends PalletManager{
  constructor(RED, palletConfig, node) {
    super(RED, palletConfig, node);

    this._self.cropX = palletConfig.cropX;
    this._self.cropY = palletConfig.cropY;
    this._self.cropHidth = palletConfig.cropHidth;
    this._self.cropWidth = palletConfig.cropWidth;
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
      const { cropX, cropY, cropWidth, cropHeight } = this;

      if(!cropX || !cropY) {
        this._processError("Should be X and Y");
        return;
      }
      this.extendMsgPayload(msg, {  cropX, cropY, cropWidth, cropHeight});
      this.send(msg);
    } catch (error) {
      this._processError(error);
      this.error(error);
    }
  }
}

module.exports = { ImageCropperPalletManager };
