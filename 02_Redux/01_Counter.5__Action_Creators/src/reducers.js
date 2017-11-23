export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return state + action.value;
        }

        case 'DECREMENT': {
            return state - action.value;
        }

        default: {
            return state;
        }
    }
}
