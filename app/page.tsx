import { getTodos } from "@/lib/todos";
import TodoItem from "@/components/TodoItem";
import NewToDoForm from "@/components/newToDoForm";

export default async function Home() {

  const { todos } = await getTodos()
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 w-fit bg-slate-100 px-2 text-2xl font-black">Todos</h1>
        <NewToDoForm/>
        <h2 className="mt-10 border-b pb-2 text-xl font-blod">Previous todos:</h2>
        <ul className="mt-4 flex flex-col gap-1">
          {
            todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          }
        </ul>
      </div>
    </section>
  );
}
