import { createSlice } from '@reduxjs/toolkit';
import en from '../../assets/translates/en.json'

export const translateStateSlice = createSlice({
    name: 'translate',
    initialState: en,
    reducers: {
        changeLanguage: (state, action) => {
            return action.payload
        }
    }
})

export const { changeLanguage } = translateStateSlice.actions;

export default translateStateSlice.reducer;
