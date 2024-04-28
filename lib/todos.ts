
import prisma from "./prisma";

export async function getTodos() {
    try {
        const todos = await prisma.todo.findMany()
        return { todos }
    } catch (error) {
        return { error }
    }
}

export async function createTodo(title: string) {
    try {
        console.log("lib/todo:",title)
        const todo = await prisma.todo.create({ data: { title } });
        return {todo}
    } catch (error) {
        return {error}
    }
}


export async function updateTodo(id:string,isComplated:boolean) {
    try {
        const todo = await prisma.todo.update({where:{id},data:{isComplated}})
        return{todo}
    } catch (error) {
        return{error}
    }
}