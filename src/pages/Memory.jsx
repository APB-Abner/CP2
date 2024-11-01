import Category from "../components/Category";
import memory from "../data/memory";

export default function Works() {
    return (
        <>
            <Category callouts={memory} title='Memórias' />
        </>
    );
}

