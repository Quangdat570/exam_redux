import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const loadCategories = createAsyncThunk("categories", async (args,api) => {
    const res = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
          headers: {
              'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      }
    );
    const data = await res.json();
      
    return data;
  });

  export const LoadCategoriDetail = createAsyncThunk("categories/detail", async (genre,api) => {
    const res = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=" + genre,
        {
            headers: {
                'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

    )

    const data = await res.json();
    
    return data;
});


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
      data: {},
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadCategories.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      });
    },
});


const categoriSlice = createSlice({
    name:"categories/detail",
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoadCategoriDetail.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})

export const categoriesReducer = categoriesSlice.reducer;
export const  {} = categoriesSlice.reducer;

export const categoriesDetailReducer = categoriSlice.reducer;
export const selectCategories = (state) => {
    return {
        ...state.category,
    };
};

export const selectCategoryDetail = (state) => {
    return {
        categories: state.categories,
    }
}

