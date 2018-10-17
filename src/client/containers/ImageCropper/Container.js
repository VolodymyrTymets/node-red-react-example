import React from 'react';
import { compose, branch, renderComponent, withHandlers, withState } from 'recompose';
import { get } from 'lodash';
import { withError, withLoader } from '../../utils/recompose-extensions';
import { Error } from '../../components';

import Component from './Component';

const enhancer = compose(
  withError,
  withLoader,
  withState('src', 'setSrc', null),
  withState('crop', 'setCrop', {
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  }),
  withHandlers({
    onSelectFile: props => e => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load',
          () => props.setSrc(reader.result), false);
        reader.readAsDataURL(e.target.files[0])
      }
    },
    onImageLoaded: props => image =>  console.log('onImageLoaded', image),
    onCropComplete: props => image =>  console.log('onCropComplete', image),
    onCropChange: props => crop => props.setCrop(crop)
  }),
  branch(({ error }) => !!error,
    renderComponent(({ error }) =>
      <Error error={error}/>)
  ),
);

export default enhancer(Component);