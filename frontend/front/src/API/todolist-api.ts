import axios from 'axios';

// const settings = {
//     withCredentials: true,
//     headers: {
//
//     },
// };
//
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     ...settings,
// });
//
// // api
// export const todoListsAPI = {
//     getTodoLists() {
//         return instance.get<any>('todos/1');
//     },
//     // createTodoLists(title: string) {
//     //     return instance.post<ResponseType<{
//     //         item: TodoListType;
//     //     }>>('todo-lists', {title: title});
//     // },
//     // deleteTodoLists(id: string) {
//     //     return instance.delete<ResponseType>(`todo-lists/${id}`);
//     // },
//     // updateTodoLists(id: string, title: string) {
//     //     return instance.put<ResponseType>(`todo-lists/${id}`, {title: title,});
//     // },
//     // getTasks(todoListID: string) {
//     //     return instance.get<GetTaskResponse>(`todo-lists/${todoListID}/tasks`);
//     // },
//     // createTasks(todoListID: string, taskTitle: string) {
//     //     return instance.post<ResponseType<{
//     //         item: TaskType;
//     //     }>>(`todo-lists/${todoListID}/tasks`, {
//     //         title: taskTitle,
//     //     });
//     // },
//     // deleteTasks(todoListID: string, taskID: string) {
//     //     return instance.delete<ResponseType>(`todo-lists/${todoListID}/tasks/${taskID}`);
//     // },
//     // updateTask(todoListID: string, taskID: string, model: UpdateTaskModelType) {
//     //     return instance.put<ResponseType>(`todo-lists/${todoListID}/tasks/${taskID}`, model);
//     // },
// };


// export const authAPI = {
//     login(data: LoginParamsType) {
//         return instance.post<ResponseType<{
//             userID?: number;
//         }>>('auth/login', data);
//     },
//     logout() {
//         return instance.delete<ResponseType<{
//             userID?: number;
//         }>>('auth/login');
//     },
//     me() {
//         return instance.get<ResponseType<{
//             id: number;
//             email: string;
//             login: string;
//         }>>('auth/me');
//     },
// };
//
//
