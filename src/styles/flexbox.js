import style from './style';
import compose from './compose';

export const alignContent = style({
  prop: 'alignContent',
});

export const alignItems = style({
  prop: 'alignItems',
});

export const justifyContent = style({
  prop: 'justifyContent',
});

const flexbox = compose(
  alignContent,
  alignItems,
  justifyContent,
);

export default flexbox;
