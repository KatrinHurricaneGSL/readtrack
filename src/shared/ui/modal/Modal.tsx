import clsx from 'clsx';
import { X } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './Modal.module.css';

interface Props {
  open: boolean;
  children?: React.ReactNode;
  title: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ open, children, title, onClose }: Props) {
  const handleCloseModal = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleClickOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.blockedOverflow);
    } else {
      document.body.classList.remove(styles.blockedOverflow);
    }
  }, [open]);

  return (
    <div
      className={clsx(styles.overlay, {
        [styles.open]: open,
      })}
      onClick={handleClickOverlay}
    >
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <Button className={styles.button} size='small' onClick={handleCloseModal} type='text'>
            <X />
          </Button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
