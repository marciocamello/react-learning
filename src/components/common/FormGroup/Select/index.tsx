import { SelectOptionProps, SelectProps } from "./selectProps";

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{rest.required ? '*' : ''} {label}</label>
            <select defaultValue="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map((option: SelectOptionProps) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;