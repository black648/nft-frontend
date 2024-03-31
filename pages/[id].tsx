import {useSelector} from "react-redux";
import {RootState} from "../src/store/store";
import {selectTodoById} from "../src/store/selectTodo";
import React, {useEffect, useState} from "react";
import {TodoForm} from "../src/components/TodoForm";
import {useRouter} from "next/router";

const TodoDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const todoId = id ? parseInt(id.toString(), 10) : null;
    const todo = useSelector((state: RootState) => todoId !== null ? selectTodoById(state, todoId) : null);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setContent(todo.content);
        }
    }, [todo]);

    const closeModal = async () => {
        await router.push('/');
    };

    return (
        <TodoForm
            title={title}
            content={content}
            onTitleChange={() => {}}
            onContentChange={() => {}}
            onSubmit={() => {}}
            onClose={closeModal}
            showCreateButton={false} />
    )
}
export default TodoDetailPage;