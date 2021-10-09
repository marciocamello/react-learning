import { SelectHTMLAttributes } from "react";

export interface SelectOptionProps {
    value: any;
    label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<SelectOptionProps>;
}