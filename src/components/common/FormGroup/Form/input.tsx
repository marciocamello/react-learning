import { FunctionComponent } from 'react';

const Form: FunctionComponent = ({ children }) => {
    return <form action="">
        {children}
    </form>;
}

export default Form;