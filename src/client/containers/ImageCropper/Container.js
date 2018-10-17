import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { get } from 'lodash';
import { withError, withLoader } from '../../utils/recompose-extensions';
import { Error } from '../../components';

import Component from './Component';

const enhancer = compose(
  withError,
  withLoader,
  branch(({ error }) => !!error,
    renderComponent(({ error }) =>
      <Error error={error}/>)
  ),
);

export default enhancer(Component);