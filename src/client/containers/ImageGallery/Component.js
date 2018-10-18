import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';

const ImageGallery = ({ node, url, urls, onSelectImage }) => (
  <div className="apiko-image-cropper">
    <h3>Image Gallery</h3>
    <div className="form-row">
      <label htmlFor="node-input-url"><i className="fa fa-tag"></i> Url</label>
      <input type="text" id="node-input-url" value={url} defaultValue={node.url}/>
    </div>
    <div className="form-row">
      <label htmlFor="node-input-name"><i className="fa fa-tag"></i> Name</label>
      <input type="text" id="node-input-name" placeholder="Name" defaultValue={node.name}/>
    </div>
    <Gallery photos={urls} onClick={onSelectImage}/>
    <h3>Outputs</h3>
    <h3>Details</h3>
    <h3>References</h3>
  </div>
);

ImageGallery.propTypes = {
  url: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired,
  node: PropTypes.object.isRequired,
};

export default ImageGallery;