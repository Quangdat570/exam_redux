import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    decrement,
    increment,
    
    selectCount, } from './counter.slice';

    export function Counter() {
        const count = useSelector(selectCount);
        const dispatch = useDispatch();
       
      
        

        return (
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                {count}
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        )

    }