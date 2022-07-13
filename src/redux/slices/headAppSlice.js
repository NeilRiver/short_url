import { createSlice } from '@reduxjs/toolkit'

export const headAppSlice = createSlice({
    name: 'app',
    initialState: {
        notify: []
    },
    reducers: {
        addEntries: (state, action) => {
            state.notify.push(action.payload)
        },
        dropEntries: (state, action) => {
            state.notify = state.notify.filter(x => x.id !== action.payload)
        }
    }
})

export const addEntriesAsync = (object) => (dispatch) => {
    dispatch(addEntries(object))
    setTimeout(() => {
        dispatch(dropEntries(object.id))
    }, 4000)
}

export const { addEntries, dropEntries, setTransition } = headAppSlice.actions

export default headAppSlice.reducer