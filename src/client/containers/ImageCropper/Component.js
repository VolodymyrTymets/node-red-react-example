import React from 'react';
import PropTypes from 'prop-types';

const ImageCropper = ({ node }) => (
  <div className="apiko-image-cropper">
    <h3>Image Cropper</h3>
    <p> Image Cropper here</p>
    <h3>Outputs</h3>
    <h3>Details</h3>
    <h3>References</h3>
  </div>
);

ImageCropper.propTypes = {
  node: PropTypes.object.isRequired,
};

export default ImageCropper;