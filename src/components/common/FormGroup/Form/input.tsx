import { FunctionComponent, useRef } from 'react';

const Form: FunctionComponent = ({ children, ...rest }) => {

    const formRef = useRef<HTMLFormElement>(null);

    return <form
        ref={formRef}
        noValidate
        autoComplete="false"
        {...rest}
    >
        {children}
    </form>;
}

export default Form;