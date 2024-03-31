import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {displayModal} from "../store/modalSlice";
import React, {useEffect, useState} from "react";
import {createTodo, deleteTodo, updateTodo} from "../store/todoSlice";
import {selectTodoById} from "../store/selectTodo";
import {TodoForm} from "./TodoForm";

const TodoModal = () => {
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
                modal && <TodoForm
                    title={title}
                    content={content}
                    onTitleChange={setTitle}
                    onContentChange={setContent}
                    onSubmit={handleCreate}
                    onClose={closeModal}
                    showDeleteButton={!!selectId}
                    onDelete={handleDelete}
                />
            }
        </>
    )
}
export default TodoModal;
