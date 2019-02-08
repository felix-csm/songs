import { combineReducers } from 'redux';

const songsReducer = () => {
    return [{
        title: 'Barbie Girl',
        duraation: '4:05'
    }, {
        title: 'Macarena',
        duration: '2:45'
    }, {
        title: 'I want it that way',
        duration: '3:15'
    }];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});