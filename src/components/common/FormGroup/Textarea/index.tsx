import { TextareaProps } from "./textareaProps";

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}> {rest.required ? '*' : ''} {label}</label>
            <textarea id={name} {...rest}></textarea>
        </div>
    );
}

export default Textarea;