import styles from "../../styles/todo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {displayModal} from "../store/modalSlice";
import {selectList} from "../store/selectTodo";


const TodoList = () => {
    const dispatch = useDispatch();

    const displayModalHandler = () => {
        dispatch(displayModal(true));
    };

    const todos = useSelector(selectList);

    return (
        <>
            <div className={styles.listWrap}>
                <h1>To Do List</h1>
                <div className={styles.buttonGroupFlexEnd}>
                    <button className={styles.btnRegist} onClick={() => displayModalHandler()}>등록</button>
                </div>
                <ul>
                    { todos.map((todo) => (
                        <li key = {todo.id} className={styles.listItem}>
                            <button type="button">
                                <p className={styles.title}>{todo.title}</p>
                                <span className={styles.date}>{todo.updatedAt}</span>
                            </button>
                        </li>
                    ))};
                </ul>
            </div>
        </>
    );
}
export default TodoList;
