function style(options) {
  const { prop, cssProperty = options.prop } = options;

  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }

    const value = props[prop];

    return {
      [cssProperty]: value,
    };
  };

  fn.propTypes = {};

  fn.filterProps = [prop];

  return fn;
}

export default style;
