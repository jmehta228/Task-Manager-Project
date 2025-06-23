import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const deleteTaskById = (id) => axios.delete(`${API_URL}/${id}`);

// PUT request to update task
export const updateTaskStatus = (taskId, updatedTask) => {
    return axios.put(`${API_URL}/${taskId}`, updatedTask);
};