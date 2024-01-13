import { CSSObject } from 'styled-components';
import { CSSProperties, ElementType } from 'react';

import { Props } from '../../../@types/props.type';

import Flex from '../Flex';

interface CenterProps {
  direction?: CSSProperties['flexDirection'];
  styles?: CSSObject;
}

const Center = <T extends ElementType = 'div'>({
  as,
  children,
  direction,
  styles,
  ...attribute
}: Props<T, CenterProps>) => {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction={direction}
      justify="center"
      align="center"
      styles={styles}
      {...attribute}
    >
      {children}
    </Flex>
  );
};

export default Center;
