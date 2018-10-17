import React from 'react';
import ReactDOM from 'react-dom';
import ImageCropper from '../../../src/client/containers/ImageCropper';

const onImageCropper = (node) =>
  ReactDOM.render(<ImageCropper node={node} />,
    document.getElementById('apiko-image-cropper'));

/**
 * This function will be called UI of pallet will be opened
 * and Filte container will loaded from server
 *  registered in ./apiko-image-cropper.html
 * **/
if(window) {
  window.Apiko = window.Apiko || {};
  window.Apiko.onImageCropperLoad = onImageCropper;
}