//action creator to return an action
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
