import { configureStore } from '@reduxjs/toolkit'
import infoStateSlice from './slices/infoState.slice'

export default configureStore({
    reducer: {
        infoState: infoStateSlice,
    }
})
