import clsx from "clsx";
import { Button } from "../Button"
import styles from "./Modal.module.css"
import { useEffect, useRef } from "react";

interface Props {
    open: boolean;
    children?: React.ReactNode;
    title: React.ReactNode;
    onClose?: () => void;
}

export function Modal({ open, children, title, onClose }: Props) {
    const handleCloseModal = () => {
        if (typeof (onClose) === "function") {
            onClose()
        }
    }

    const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            if (typeof (onClose) === "function") {
                onClose()
            }
        }
    }

    useEffect (() => {
        if(open) {
            document.body.classList.add("blocked-overflow")
        } else {
            document.body.classList.remove("blocked-overflow")
        }
    }, [open])

    return (
        <div className={clsx(styles.overlay, {
            [styles.open]: open
        })} onClick={handleClickOverlay}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <Button size="small" onClick={handleCloseModal} type="text">х</Button>
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}