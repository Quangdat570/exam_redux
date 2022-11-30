import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        inQty: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload
            );

            if (itemIndex !== -1) {
                const newState = [...state];

                const newItem = {
                    ...newState[itemIndex],
                    quantity: newState[itemIndex].quantity + 1,
                };

                newState[itemIndex] = newItem;

                return newState;
            }
        },

        decQty: (state, action) => {
            const index = state.findIndex(
                (item) => item.id === action.payload
            );

            if (index !== -1 && state[index].quantity > 1) {
                const newState = [...state];

                const newItem = { ...newState[index] };
                newItem.quantity -= 1;

                newState[index] = newItem;

                return newState;
            }
        },
    }
})

export const counterReducer = counterSlice.reducer;
export const {  incQty, decQty } = counterSlice.actions;

export const selectCounter = (state) => state.todos;