export interface ITodo {
    id: number | string,
    title: string,
    todos: Array<T>
}
export interface T {
    id: number | string,
    text: string,
    completed: boolean
}