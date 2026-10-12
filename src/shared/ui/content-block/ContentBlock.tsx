import clsx from "clsx";
import styles from "./ContentBlock.module.css"

interface ContentBlockProps {
    children: React.ReactNode;
    className?: string;
}

export function ContentBlock({ children, className }: ContentBlockProps) {

    return (
        <div className={clsx(styles.content, className)}>
            {children}
        </div>
    )
}