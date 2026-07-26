import clsx from "clsx";
import style from "./Button.module.css"

interface ButtonProps {
    htmlType?: "button" | "reset" | "submit" | undefined
    type?: "primary" | "outline"
    size?: "small" | "middle" | "large"
    danger?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: any;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

const sizeClass = {
    small: style.small,
    middle: style.middle,
    large: style.large,
};

export function Button({
    htmlType = "button",
    type = "primary",
    size = "middle",
    danger,
    onClick,
    children,
    disabled,
    loading,
    className
}: ButtonProps) {

    return (
        <button
            type={htmlType}
            onClick={onClick}
            disabled={disabled || loading}
            className={clsx(style.button, className, sizeClass[size], style[type], {
                [style.danger]: danger,
            })}
        >
            {children}
        </button>
    )
}
