import React from 'react';
import Image from 'next/image';
import CloseImage from '../../public/icon_close.png';
import styles from '../../styles/todo.module.css';

interface Props {
    title: string;
    content: string;
    onTitleChange: (title: string) => void;
    onContentChange: (content: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClose: () => void;
    showCreateButton?: boolean;
    showDeleteButton?: boolean;
    onDelete?: () => void;
}

export const TodoForm: React.FC<Props> = ({
   title,
   content,
   onTitleChange,
   onContentChange,
   onSubmit,
   onClose,
   showCreateButton = true,
   showDeleteButton = false,
   onDelete,
 }) => (
    <div className={styles.popup}>
        <div className={styles.popupBg} onClick={onClose} />
        <div className={styles.popCont}>
            <button className={styles.closeBtn} onClick={onClose}>
                <Image src={CloseImage} alt={"닫기"} />
            </button>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
            }}>
                <input type="text" placeholder="제목을 입력하세요" value={title} className={styles.popTitle} onChange={(e) => onTitleChange(e.target.value)} />
                <textarea placeholder="내용을 입력하세요" value={content} className={styles.popText} onChange={(e) => onContentChange(e.target.value)}></textarea>
                <div className={styles.buttonGroup}>
                    { showCreateButton && (
                        <button type="submit" className={styles.popBtn}>저장</button>
                    )}
                    { showDeleteButton && (
                        <button type="button" className={styles.popDeleteBtn} onClick={onDelete}>삭제</button>
                    )}
                </div>
            </form>
        </div>
    </div>
);