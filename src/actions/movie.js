import database from '../firebase/firebase';
export const ADD_REVIEWS = 'ADD_REVIEWS';

export const addMovies = (movie) => ({
    type: 'ADD_FAVS',
    movie
  });

export const addFavs = (movieData = {}) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      const {
            id=''
      } = movieData;
      const FavMovie = { id };
  
      return database.ref(`users/${uid}/favs`).push(FavMovie).then((ref) => {
        dispatch(addMovies({
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

export const reviews = (movie) =>
 ({
   type: ADD_REVIEWS,details: movie.reviewData
 });

export const addReviews = (reviewData = {}) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      console.log(uid)
      const {
            id='',
            description='',
      } = reviewData;
      const review = { id, description};
      return database.ref(`users/${uid}/review`).push(reviewData).then((ref) => {
        dispatch(reviews({
          reviewData
        }));
      });
    };
  };