import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
    filter: "all",
};

export const loadTodos = createAsyncThunk("todos/load", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    return data;
});

export const createTodo = createAsyncThunk("todos/create", async (todo) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    const data = await res.json();

    return data;
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadTodos.fulfilled, (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        });

        builder.addCase(createTodo.fulfilled, (state, action) => {
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        });
    },
});

export const todoReducer = todoSlice.reducer;
export const selectTodos = (state) => state.todos;
