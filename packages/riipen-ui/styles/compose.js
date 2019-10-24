import merge from 'lodash/merge';

function compose(...styles) {
  const fn = (props) =>
    styles.reduce((acc, style) => {
      const output = style(props);

      if (output) {
        return merge(acc, output);
      }

      return acc;
    }, {});

  fn.propTypes = {};

  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);

  return fn;
}

export default compose;