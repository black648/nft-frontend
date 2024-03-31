import styles from "../../styles/todo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import Image from "next/image";
import CloseImage from "../../public/icon_close.png"
import {displayModal} from "../store/modalSlice";

const TodoFormModal = () => {
    const modal = useSelector((state: RootState) => state.modalSlice.display);
    const dispatch = useDispatch();
    const displayModalHandler = () => {
        dispatch(displayModal(false));
    };

    return (
        <>
            {
                modal && <div className={styles.popup}>
                    <div className={styles.popupBg}></div>
                    <div className={styles.popCont}>
                        <input type="text" placeholder="제목을 입력하세요" className={styles.popTitle} />
                        <textarea placeholder="내용을 입력하세요" className={styles.popText}></textarea>

                        <div className={styles.buttonGroup}>
                            <button type="button" className={styles.popBtn} onClick={() => displayModalHandler()}>닫기</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default TodoFormModal;
