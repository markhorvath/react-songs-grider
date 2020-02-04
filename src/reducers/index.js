import { combineReducers } from 'redux';

export const songsReducer = () => {
    return [
        {title: 'Teen Spirit', duration: '4:32'},
        {title: 'Notorius Thugz', duration: '5:29'},
        {title: 'Be Yourself', duration: '3:37'},
        {title: 'Lateralus', duration: '9:48'},
        {title: 'Du Ma Cha', duration: '2:32'},
    ]
};

//set selectedSong default to null for when it first renders
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

//the keys on this object are going to be the keys in our state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});