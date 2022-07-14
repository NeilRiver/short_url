import { createSlice } from '@reduxjs/toolkit'

export const headAppSlice = createSlice({
    name: 'app',
    initialState: {
        notify: [],
        backdrop: false
    },
    reducers: {
        addEntries: (state, action) => {
            state.notify.push(action.payload)
        },
        dropEntries: (state, action) => {
            state.notify = state.notify.filter(x => x.id !== action.payload)
        },
        showBackdrop: (state) => {
            state.backdrop = !state.backdrop
        }
    }
})

export const addEntriesAsync = (object) => (dispatch) => {
    dispatch(showBackdrop())
    dispatch(addEntries(object))
    dispatch(showBackdrop())
    setTimeout(() => {
        dispatch(dropEntries(object.id))
    }, 4000)

}

export const { addEntries, dropEntries, showBackdrop } = headAppSlice.actions

export default headAppSlice.reducer