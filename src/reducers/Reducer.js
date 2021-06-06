const reducer=(state = {addPerson : 'Mike Tyson'}, action) => {
    if(action.type==="ADD_PERSON"){
        state.addPerson=action.date;
        console.log(action);
    }
    return state;
}
export default reducer;