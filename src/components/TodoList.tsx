import styles from "../../styles/todo.module.css";

const TodoList = () => {
    return (
        <>
            <div className={styles.listWrap}>
                <h1>To Do List</h1>
                <div className={styles.buttonGroupFlexEnd}>
                    <button type="button" className={styles.btnRegist}>등록</button>
                </div>
                <ul>
                    <li className={styles.listItem}>
                        <button type="button">
                            <p className={styles.title}>게시글 제목입니다</p>
                            <span className={styles.date}>2024.12.31</span>
                        </button>
                    </li>
                    <li className={styles.listItem}>
                        <button type="button">
                            <p className={styles.title}>게시글 제목입니다</p>
                            <span className={styles.date}>2024.12.31</span>
                        </button>
                    </li>
                    <li className={styles.listItem}>
                        <button type="button">
                            <p className={styles.title}>게시글 제목입니다</p>
                            <span className={styles.date}>2024.12.31</span>
                        </button>
                    </li>
                    <li className={styles.listItem}>
                        <button type="button">
                            <p className={styles.title}>게시글 제목입니다</p>
                            <span className={styles.date}>2024.12.31</span>
                        </button>
                    </li>
                    <li className={styles.listItem}>
                        <button type="button">
                            <p className={styles.title}>게시글 제목입니다</p>
                            <span className={styles.date}>2024.12.31</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default TodoList;
