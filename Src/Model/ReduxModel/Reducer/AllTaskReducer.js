
export default function (state = null, action) {
    switch (action.type) {
        case "SET_ALL_TASK" :
            console.log('reducer');
            console.log(action.payload);
            return action.payload;
            break;
    }
    return state;
}