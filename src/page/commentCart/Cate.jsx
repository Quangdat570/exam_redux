import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Category } from "./Category";
import { selectCategories } from "../../store/feautes/categories/categories.slice";
import { LoadCategoriDetail } from "../../store/feautes/categories/categories.slice";



function GameFilters({ onChange}) {
    const dispatch = useDispatch();
    const {genre} = useParams();
  
    const categorys = useSelector(selectCategories);
  
    useEffect(() => {
      dispatch(LoadCategoriDetail(genre));
    }, []);

    const [] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }
   
    return (
        <div className="col-3">
            <div>danh muc san pham</div>
            <ul>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.genre}</li>
                ))}
            </ul>
        </div>
    )
}

export default GameFilters;