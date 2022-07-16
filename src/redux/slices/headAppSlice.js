import { createSlice } from '@reduxjs/toolkit'

export const headAppSlice = createSlice({
    name: 'app',
    initialState: {
        notify: [],
        sign_up: false,
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
        },
        setSignUp: (state)=> {
            state.sign_up = !state.sign_up
        }
    }
})

export const addEntriesAsync = (object) =>  (dispatch) => {
    dispatch(addEntries(object))
    dispatch(showBackdrop())
    setTimeout(() => dispatch(dropEntries(object.id)), 3000)
}

export const { addEntries, dropEntries, showBackdrop, setSignUp } = headAppSlice.actions

export default headAppSlice.reducer