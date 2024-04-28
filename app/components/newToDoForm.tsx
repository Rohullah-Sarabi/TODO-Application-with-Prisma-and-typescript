"use client"
import { useRef } from "react";
import { createTodoAction } from "../_actions";

const NewToDoForm = ()=>{
    const formRef = useRef<HTMLFormElement>(null)

    async function Action(data:FormData) {
        const title = data.get("title")
        if(!title || typeof title !== "string") return;
        // call a sever action to create a todo
        await createTodoAction(title)
        // reset the form
        formRef.current?.reset()
    }
    return(
        <form ref={formRef} action={Action}>
            <h2>Create a new Todo</h2>
            <input type="text" name='title' id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <button 
            className="ml-2 rounded bg-slate-700 px-2 py-1 tex-sm text-white"
            type="submit">Add Todo</button>
        </form>
    )
}

export default NewToDoForm;