import { withState, lifecycle, compose, withProps } from 'recompose';


/**
 * Provide for loader state extensions
 * @return - loading() - set loading as true || false
 * */
 // todo: duplicated
const withLoader = component =>
  compose(
    withState('isLoading', 'loading', false),
  )(component);

/**
 * Provide for loader state extensions
 *         setLoading(name) - set loading as true || false
 *         isLoading(name) - get loading as true || false
 * */
const withLoading =  component =>
  compose(
    withState('loading', 'setLoadingState', false),
    withProps(props => ({
      setLoading: (name) => (value) => props.setLoadingState(!!value && (name || true) || value),
      // eslint-disable-next-line no-undef
      isLoading: (name) => name ? props.loading === name : !!loading,
    }))
  )(component);

// eslint-disable-next-line valid-jsdoc
/**
 * Provide to error handling
 * @return - setError() - set error as err || null
 * */
const withError = component =>
  compose(
    withState('isLoading', 'loading', false),
    withState('error', 'setError', null),
    lifecycle({
      componentWillUpdate(newProps) {
        if (newProps.error) {
          // eslint-disable-next-line
          console.log(newProps.error);
        }
      }
    })
  )(component);

export { withLoader, withError, withLoading };
