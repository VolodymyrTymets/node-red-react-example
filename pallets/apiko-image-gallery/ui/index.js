import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from '../../../src/client/containers/ImageGallery';

const onImageGallery = (node) =>
  ReactDOM.render(<ImageGallery node={node} />,
    document.getElementById('apiko-image-gallery'));

/**
 * This function will be called UI of pallet will be opened
 * and Filte container will loaded from server
 *  registered in ./apiko-image-gallery.html
 * **/
if(window) {
  window.Apiko = window.Apiko || {};
  window.Apiko.onImageGalleryLoad = onImageGallery;
}