import styles from "../../styles/todo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {displayModal} from "../store/modalSlice";
import CloseImage from "../../public/icon_close.png";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {createTodo, deleteTodo, updateTodo} from "../store/todoSlice";
import {selectTodoById} from "../store/selectTodo";

const TodoFormModal = () => {
    const modal = useSelector((state: RootState) => state.modalSlice.display);
    const selectId = useSelector((state: RootState) => state.modalSlice.id);
    const todo = useSelector((state: RootState) => selectId === null ? null : selectTodoById(state, selectId));
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setContent(todo.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [todo]);

    const closeModal = () => {
        dispatch(displayModal({ display: false }));
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const now = new Date().toISOString().slice(0, 10);

        if (selectId) {
            dispatch(updateTodo({
                id: selectId,
                title,
                content,
                updatedAt: now
            }));
        } else {
            dispatch(createTodo({
                title,
                content,
                createdAt: now
            }));
        }

        // 초기화
        setTitle('');
        setContent('');

        // 모달 창 닫기
        dispatch(displayModal({ display: false }));
    }

    const handleDelete = () => {
        if (selectId === null) return;

        dispatch(deleteTodo({
            id: selectId
        }));

        // 초기화
        setTitle('');
        setContent('');

        closeModal();
    };

    return (
        <>
            {
                modal && <div className={styles.popup}>
                    <div className={styles.popupBg} />
                    <div className={styles.popCont}>
                        <button className={styles.closeBtn}>
                            <Image src={CloseImage} alt={"닫기"} onClick={() => closeModal()} />
                        </button>
                        <form onSubmit={handleCreate}>
                            <input type="text" placeholder="제목을 입력하세요" value={title} className={styles.popTitle} onChange={(e) => setTitle(e.target.value)} />
                            <textarea placeholder="내용을 입력하세요" value={content} className={styles.popText}  onChange={(e) => setContent(e.target.value)}></textarea>
                            <div className={styles.buttonGroup}>
                                { selectId ?
                                    <div>
                                        <button type="submit" className={styles.popBtn}>수정</button>
                                        <button type="submit" className={styles.popDeleteBtn} onClick={handleDelete}>삭제</button>
                                    </div>
                                    : <button type="submit" className={styles.popBtn}>등록</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
export default TodoFormModal;
