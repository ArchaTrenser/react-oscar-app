import {ADD_REVIEWS} from '../actions/movie';
const movieFavList = [];

export default (state = movieFavList, action) => {
    switch (action.type) {
        case 'ADD_FAVS':
            return [
                ...state,
                action.movie
            ];

        case 'REMOVE_FAVS':
            return state.filter(({ id }) => id !== action.id);

        case ADD_REVIEWS:
        let updatedState = [...state]
        updatedState.details = action.details
        console.log(updatedState)
            return updatedState
        default:
            return state;
    }
}

