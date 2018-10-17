const { ImageCropperPalletManager } = require('../../src/server/pallet-managers/image-cropper');
const  MODULE_NAME = 'apiko-image-cropper';

module.exports = function(RED) {
  'use strict';
  function nodeGo(config) {
    RED.nodes.createNode(this, config);

    const node = this;
    const palletManager = new ImageCropperPalletManager(RED, config, node);

    node.on('input', palletManager.onInput);
  }

  RED.nodes.registerType(MODULE_NAME, nodeGo);

  /**
   * Provide Api point to get builded js code for ui
   * **/
  RED.httpAdmin.get(`/${MODULE_NAME}/js/*`, (req, res) => {
    res.sendFile(req.params[0], {
      root: __dirname + '/ui/build', // <- get code form this dir
      dotfiles: 'deny'
    });
  });
};
