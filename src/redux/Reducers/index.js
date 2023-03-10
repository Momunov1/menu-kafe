const initialState = {
    product: [],
    menu: []
}

export  const Reducer = (state= initialState,action) => {
    switch (action.type) {
        case "ADD_TO_MENU":
            return {...state,menu:action.payload}
        default:
            return state
    }
}