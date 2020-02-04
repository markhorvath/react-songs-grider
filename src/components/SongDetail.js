import React from 'react';
import { connect } from 'react-redux';

//using ({ song }) here is destructuring.  it's used instead of (props) and is equivalent to (props.song)
const SongDetail = ({ song }) => {
    if(!song) {
        return (
            <div>Select a song</div>
        )
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
};

//state is going to be whats in our combineReducers object, so we're taking the selectSong
//key value and assigning it to a new value 'song' which gets returned
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);