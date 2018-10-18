import React from 'react';
import { compose, branch, renderComponent, withHandlers, withState, withProps } from 'recompose';
import { range } from 'lodash';
import { withError, withLoader } from '../../utils/recompose-extensions';
import { Error } from '../../components';

import Component from './Component';

const enhancer = compose(
  withError,
  withLoader,
  withState('url', 'setUrl', null),
  withProps({
    urls: range(10).map(v => ({
      src: `https://picsum.photos/340/420?image=${v}`,
      width: 1,
      height: 1
    })),
  }),
  withHandlers({
    onSelectImage: props => e => {
      const url = e.target.src;
      props.setUrl(url);
      window.Apiko.constants = {
        lastSelectedUrl: {
          form: props.node.name,
          value: url,
        }
      }
    },
  }),
  branch(({ error }) => !!error,
    renderComponent(({ error }) =>
      <Error error={error}/>)
  ),
);

export default enhancer(Component);