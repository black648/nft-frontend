import styles from "../../styles/todo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {displayModal} from "../store/modalSlice";
import CloseImage from "../../public/icon_close.png";
import Image from "next/image";
import React, {useState} from "react";
import {createTodo} from "../store/todoSlice";

const TodoFormModal = () => {
    const modal = useSelector((state: RootState) => state.modalSlice.display);
    const todos = useSelector((state: RootState) => state.todoSlice.todos);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const displayModalHandler = () => {
        dispatch(displayModal(false));
    };

    const submitHandle = (e: React.FormEvent) => {
        e.preventDefault();
        const now = new Date().toISOString().slice(0, 10);
        dispatch(createTodo({
            title,
            content,
            createdAt: now
        }));

        // 초기화
        setTitle('');
        setContent('');

        // 모달 창 닫기
        dispatch(displayModal(false));
    }

    return (
        <>
            {
                modal && <div className={styles.popup}>
                    <div className={styles.popupBg} />
                    <div className={styles.popCont}>
                        <button className={styles.closeBtn}>
                            <Image src={CloseImage} alt={"닫기"} onClick={() => displayModalHandler()} />
                        </button>
                        <form onSubmit={submitHandle}>
                            <input type="text" placeholder="제목을 입력하세요" className={styles.popTitle}  onChange={(e) => setTitle(e.target.value)} />
                            <textarea placeholder="내용을 입력하세요" className={styles.popText}  onChange={(e) => setContent(e.target.value)}></textarea>
                            <div className={styles.buttonGroup}>
                                <button type="submit" className={styles.popBtn}>등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
export default TodoFormModal;
