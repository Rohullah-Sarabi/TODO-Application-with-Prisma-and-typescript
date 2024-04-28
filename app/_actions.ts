"use server";

import { DeleteTodo, createTodo, updateTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(title:string) {
    await createTodo(title)
    revalidatePath("/")
    
}

export async function updateTodoAction(id:string,isComplated:boolean) {
    await updateTodo(id,isComplated)
    revalidatePath("/")
}

export async function deleteTodoAction(id:string) {
    await DeleteTodo(id)
    revalidatePath("/")
}