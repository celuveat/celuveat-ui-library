import { ComponentPropsWithoutRef, FormEventHandler, useRef } from 'react';
import { getChildrenForInputRef } from './method/getChildrenForInputRef';

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  externalSubmitEvent?: (inputs: HTMLInputElement[]) => void;
}

function Form({ children, externalSubmitEvent, ...rest }: FormProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let focusFlag = false;

    Object.entries(inputRefs.current).forEach(([_, element]) => {
      if (!focusFlag && element.checkValidity()) {
        element.focus();
        element.scrollIntoView();
        focusFlag = true;
      }
    });

    if (!focusFlag) {
      if (externalSubmitEvent) externalSubmitEvent(inputRefs.current);
    }
  };

  return (
    <form onSubmit={handleSubmit} {...rest}>
      {getChildrenForInputRef(children, inputRefs)}
    </form>
  );
}

export default Form;
