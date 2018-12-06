import database from '../firebase/firebase';

export const addMovies = (movie) => ({
    type: 'ADD_FAVS',
    movie
  });

export const addFavs = (movieData = {}) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      const {
            id='',
            title='',
            poster_path='',
      } = movieData;
      const FavMovie = { id, title, poster_path, title};
  
      return database.ref(`users/${uid}/favs`).push(FavMovie).then((ref) => {
        dispatch(addMovies({
          id: ref.key,
          ...FavMovie
        }));
      });
    };
  };
  
export const removeFavs = ({ id } = {}) => ({
    type: 'REMOVE_FAVS',
    id
  });
  
export const startRemoveFavs = ({ id } = {}) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/favs/${id}`).remove().then(() => {
        dispatch(removeFavs({ id }));
      });
    };
  };