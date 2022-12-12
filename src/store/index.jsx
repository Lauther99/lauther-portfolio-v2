import { configureStore } from '@reduxjs/toolkit'
import infoStateSlice from './slices/infoState.slice'
import translateStateSlice from './slices/translateState.slice'

export default configureStore({
    reducer: {
        infoState: infoStateSlice,
        translate: translateStateSlice
    }
})
