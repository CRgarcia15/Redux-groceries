//establish DOM elements as variables
const grocerySubmit = document.getElementById('addGrocery')
const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')

//instantiate deault state value
const initialState = {
    groceries: []
}

//establish the reducer. Takes initial state value and an action as arguments.
const groceryReducer = (state = initialState.groceries, action) => {
    switch (action.type) {
        case 'grocery/add':
            return [
                ...state, 
                {text: action.text}
            ]
        case 'grocery/clear':
            return []
        default: 
            return state        
    }
}


//creating store
let store = Redux.createStore(groceryReducer)

//event listeners
grocerySubmit.addEventListener('click', (e) => {newGrocery(e)})
clearBtn.addEventListener('click', clearList)

//clearing the list
const clearList = () => {
    document.getElementById('newItem').value = ' '
    store.dispatch({
        type: 'grocery/clear'
    })
}

//creating a new grocery list
const newGrocery = (e) => {
    e.preventDefault()
    let groceryText = document.getElementById('newItem').value
    store.dispatch({
        type: 'grocery/add',
        text: groceryText
    })
    console.log(store.getState())
}