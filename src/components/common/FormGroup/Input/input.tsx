import { InputProps } from "./inputProps";

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{rest.required ? '*' : ''} {label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;