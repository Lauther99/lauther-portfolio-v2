import { createSlice } from '@reduxjs/toolkit';

export const infoStateSlice = createSlice({
    name: 'infoState',
    initialState: 'home',
    reducers: {
        changeInfoState: (state, action) => {
            return action.payload
        }
    }
})

export const { changeInfoState } = infoStateSlice.actions;

export default infoStateSlice.reducer;


export const changePage = (page) => (dispatch) => {
    dispatch(changeInfoState(page));
    return 
}