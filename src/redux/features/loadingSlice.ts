import { createSlice } from "@reduxjs/toolkit"

const initiaLState: boolean = false;

export const LoadingSlice = createSlice({
    name: "loadingSlice",
    initiaLState,
    reducers: {
        setLoading: (state, action: PayLoadAction<boolean) => {
            return action.payLoad
        }
    }
})

export const {setLoading} = LoadingSlice.actions;
export default LoadingSlice.reducer;
