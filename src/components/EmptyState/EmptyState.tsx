import styles from "./EmptyState.module.css"
import { EmptyIcon } from "../EmptyIcon";

interface Props {
    text?: string;
    description?: string;
}

export function EmptyState({ text = "Ничего не найдено", description }: Props) {
    return (
        <div className={styles.empty}>
            <EmptyIcon />
            <h3 className={styles.title}>{text}</h3>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    )
}