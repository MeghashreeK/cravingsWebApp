import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
        
            if (existingItemIndex !== -1) {
                // If the item already exists in the state, update its count
                state.items[existingItemIndex].count = (state.items[existingItemIndex].count || 0) + 1;
            } else {
                // If the item doesn't exist in the state, add it
                state.items.push(action.payload);
            }
        }
,        
removeItem: (state, action) => {
    const existingItemIndex = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);

    if (existingItemIndex !== -1) {
        // If the item already exists in the state, update its count
        state.items[existingItemIndex].count = (state.items[existingItemIndex].count || 0) - 1;
        if (state.items[existingItemIndex].count <= 0) {
            // If the count becomes zero or negative, remove the item from the state
            state.items.splice(existingItemIndex, 1);
        }
    }
}
,
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const{addItem,clearCart,removeItem}=cartSlice.actions;
export default cartSlice.reducer;














// const cartSlice= createSlice({
//     name:"cart",
//     initialState:{
//         items:[],
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items=action.payload;
//         },
//         clearCart:(state)=>{
//             state.items.length=0;
//         }
//     }
// });
// export const{addItem,clearCart}=cartSlice.actions;
// export default cartSlice.reducer;




// const cartSlice= createSlice({
//     name:"cart",
//     initialState:{
//         items:[],
//         quantity:[]
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeItem:(state)=>{
//             state.items.pop();
//         },
//         clearCart:(state)=>{
//             state.items.length=0;
//         },
//         Quantity:(state,action)=>{
//             state.quantity=action.payload;
//         }
//     }
// });

// export const{addItem,removeItem,clearCart,Quantity}=cartSlice.actions;
// export default cartSlice.reducer;

