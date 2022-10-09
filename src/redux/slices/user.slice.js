import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";


import {userService} from "../../services";


const initialState={
    users:[],
    currentUser:null,
    loading: false,
    error:null,
    userFromApi:null
};


const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue})=>{
        try {
           const {data} = await userService.getAll();
           return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
            const response = await userService.getById(id);
            const {data} = response;
            return data;
        }catch (e) {

            return rejectWithValue(e.response.data)
        }
    }
);



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        // getAll:(state, action) => {
        //     state.users = action.payload   //переробили на асінксанк
        // },
        setCurrentUser:(state, action) => {
            state.currentUser = action.payload
        },
        deleteById:(state, action) => {
            const index = state.users.findIndex(value => value.id === action.payload);
            state.users.splice(index, 1);
            console.log(current(state.users)); /// потрібно щоб логати і дивитися
        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{      //тут описуємо що зробити асінксанк запиту
    //         state.users = action.payload;
    //     },
    // }

    extraReducers:builder =>                       //другий варіант описати що робити асінксанку через колбек
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, state => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromApi = action.payload;
                action.loading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, state => {
                state.loading = true;
            })
});


const {reducer: userReducer, actions: {setCurrentUser, deleteById}} = userSlice;

const userActions = {
    setCurrentUser,
    getAll,
    getById,
    deleteById
}

export {userReducer, userActions};