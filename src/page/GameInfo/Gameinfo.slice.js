import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: {},
//   loading: false,
// };

export const loadInfo = createAsyncThunk("infos", async (args,api) => {
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

export const LoadGameDetail = createAsyncThunk("game/detail", async (id,api) => {
    const res = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id,
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

const infoSlice = createSlice({
  name: "infos",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadInfo.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
  },
});

const infomationSlice = createSlice({
    name:"game/detail",
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoadGameDetail.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})

export const infoReducer = infoSlice.reducer;
export const  {} = infoSlice.reducer;

export const gameDetailReducer = infomationSlice.reducer;
export const selectInfos = (state) => {
    return {
        ...state.infos,
    };
};

export const selectGameDetail = (state) => {
    return state.game.data
}