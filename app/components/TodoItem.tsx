"use client"
import { Todo } from "@prisma/client";
import { useTransition } from "react";
import { updateTodoAction } from "../_actions";

type TodoItemProps = {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {

    const [pendding,startTransition] = useTransition()

    return (
        <li className="flex items-center gap-3">
            <input id={todo.id} type="checkbox" defaultChecked={todo.isComplated}
                className="peer h-4 w-4 cursor-pointer rounded border border-gray-300 text-gray-500"
                onChange={(e)=>startTransition(()=>updateTodoAction(todo.id,e.target.checked))}
            />

            <label htmlFor={todo.id}
            className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
            >
                {todo.title}
            </label>
            <span className="ml-auto text-sm text-slate-500 peer-checked:line-through">
                {todo.updatedAt.toUTCString()}
            </span>
        </li>
    )
}

export default TodoItem;