import Todo from "./todo";
const getTodos = async () => {
    let todos1 = await fetch("http://127.0.0.1:3001/api/todo/list");
    return todos1.json();
};
export default async function TodoList() {
    const { todos } = await getTodos();
    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((t) => {
                        return (
                            <li key={t.id} style={{ padding: "5px 0" }}>
                            <Todo todo = {t} />
                              </li>
                        );
                    })}
            </ul>
        </div>
    );

}