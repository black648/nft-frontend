import type { NextPage } from 'next';
import TodoList from "../src/components/TodoList";
import TodoModal from "../src/components/TodoModal";

const Home: NextPage = () => {
    return (
        <main>
            <TodoList />
            <TodoModal />
        </main>
    );
};

export default Home;
