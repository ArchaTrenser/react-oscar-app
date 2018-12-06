const movieFavList = [];
export default (state = movieFavList ,action)=>
{
    switch(action.type)
    {
        case 'ADD_FAVS':
            return [
                ...state,
                action.movie
            ];
        case 'REMOVE_FAVS':
            return state.filter(({ id }) => id !== action.id);
        default :
            return state;    
    }
}