import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Food {
    id?: number;
    name: string;
    price: number;
    photo: string | ArrayBuffer | any;
}

interface MenuState {
    foods: Food[];
}
// type AddFoodPayload = Omit<Food, "id"> & { photo: File };

const initialState: MenuState = {
    foods: [],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<Food>) => {
            state.foods.push(action.payload);
        },
    },
});


export const { addFood } = menuSlice.actions;

export default menuSlice.reducer;