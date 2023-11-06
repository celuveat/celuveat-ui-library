import { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

export default Button;
