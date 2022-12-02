import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import GameFilters from "./Cate";

export const Category = ({catee}) => {
    
    const dispatch = useDispatch();
    const handleCategoryChange = (newCategoryId) => {

      if (!onChange) return;
      
      const newFilters = {
        ...filters,
        CategoryId: newCategoryId,
      };

      onChange(newFilters)
        
    }



   
    
    return (
        <div className="">
          <GameFilters onChange={handleCategoryChange}/>
            
        </div>
    );
};