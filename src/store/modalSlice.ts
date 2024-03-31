import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
    display: boolean;
    id: number | null;
}

const initialState: ModalState = {
    display: false,
    id: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        displayModal: (state, action: PayloadAction<{ display: boolean; id?: number | null }>) => {
            const { display, id } = action.payload;
            state.display = display;
            state.id = id ?? null;
        },
        closeModal: (state) => {
            state.display = false;
            state.id = null;
        },
    },
});

export const { displayModal } = modalSlice.actions;
export default modalSlice.reducer;
