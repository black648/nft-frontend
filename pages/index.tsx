import type { NextPage } from 'next';
import TodoList from "../src/components/TodoList";
import TodoFormModal from "../src/components/TodoFormModal";

const Home: NextPage = () => {
    return (
        <main>
            <TodoList />
            <TodoFormModal />
        </main>
    );
};

export default Home;
