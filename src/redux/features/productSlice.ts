import { IProduct } from "@/app/admin/dashboard/page"
import { PayLoadAction, createSlice } from "@reduxjs/toolkit"

const initiaLState: IProduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
}

 export const productSlice = createSlice({
    name: "productSlice",
    initiaLState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payLoad
        }
    }
 })

 export const {setProduct} = productSlice.actions
 export default productSlice.reducer
 