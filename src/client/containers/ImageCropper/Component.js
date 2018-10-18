import React from 'react';
import PropTypes from 'prop-types';
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import './style.css';

const ImageCropper = ({ node, src, crop, onSelectFile, onImageLoaded, onCropComplete, onCropChange }) => (
  <div className="apiko-image-cropper">
    <h3>Image Cropper</h3>
    <div>
      <div>
        <input type="file" onChange={onSelectFile} />
      </div>
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
    </div>
    <div className="form-row">
      <label htmlFor="node-input-name"><i className="fa fa-tag"></i> Name</label>
      <input type="text" id="node-input-name" placeholder="Name" defaultValue={node.name}/>
      <input type="text" id="node-input-cropX" value={crop.x} className="hide" />
      <input type="text" id="node-input-cropY" value={crop.y} className="hide"  />
      <input type="text" id="node-input-cropWidth" value={crop.width} className="hide"  />
      <input type="text" id="node-input-cropHeight" value={crop.height} className="hide" />
    </div>
    <h3>Outputs</h3>
    <h3>Details</h3>
    <h3>References</h3>
  </div>
);

ImageCropper.propTypes = {
  src: PropTypes.string,
  crop: PropTypes.object.isRequired,
  onSelectFile: PropTypes.func.isRequired,
  onImageLoaded: PropTypes.func.isRequired,
  onCropComplete: PropTypes.func.isRequired,
  onCropChange: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
};

export default ImageCropper;