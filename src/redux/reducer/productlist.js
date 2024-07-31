// import { createSlice } from "@reduxjs/toolkit";

// // Define the initial state
// const initialState = {
//   list: [],
//   searchTerm: ''
// };

// // Create the product slice
// export const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts: (state, { payload }) => {
//       state.list = payload;
//     },
//     setSearchTerm: (state, { payload }) => {
//       state.searchTerm = payload;
//     }
//   }
// });

// // Export the actions
// export const { setProducts, setSearchTerm } = productSlice.actions;

// // Export the reducer
// export default productSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";
const initialState={
list:[],
searchTerm:''
};

export const productSlice=createSlice(
    {
        name:'products',
        initialState,
        reducers:{
            setProducts:(state,{payload})=>
            {
                debugger
                state.list=payload
            },
            setSearchTerm: (state, { payload }) => {
                debugger
                state.searchTerm = payload; // Set the search term
              }
        }
    });
    export const{setProducts,setSearchTerm}=productSlice.actions;
    export default productSlice.reducer;
