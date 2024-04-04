import Container from './Container';
import StackAnimationProvider from './Provider';
import Item from './Item';
import Trigger from './Trigger';

const StackAnimation = Object.assign(StackAnimationProvider, {
  Trigger,
  Item,
  Container
});

export default StackAnimation;