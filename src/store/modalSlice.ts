import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
    display: boolean,
}

const initialState: ModalState = {
    display: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        displayModal: (state, action: PayloadAction<boolean>) => {
            state.display = action.payload;
        }
    }
});

export const { displayModal } = modalSlice.actions;
export default modalSlice.reducer;
