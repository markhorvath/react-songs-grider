import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//HOW WE GET DATA FROM REDUX STORE INTO COMPONENT: STEPS:
//1. import connect at the top
//2. always going to call connect at the bottom and pass in our component as the 2nd function call
//3. always going to define mapStateToProps
//4. mapStateToProps is always going to get a first argument of 'state'
//5. we're always going to return an object that shows up as 'props' inside our component

class SongList extends Component {
    //this is a helper method to map over props.song and return JSX for each song, it will later be called in the render func
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        });
    }
    render() {
        // console.log(this.props);
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

//by convention we call this the mapstatetoprops function (can use const or function to declare it)
//it takes our state object (our store when using redux) and run a calculation on it
//that will cause that data to eventually show up as props in our component
const mapStateToProps = (state) => {
    console.log(state);
    return {songs: state.songs};
}

// connect function can be used to pass actions to components
// { selectSong } is the same as doing { selectSong: selectSong } where the 2nd on is the action creator we imported, i.e. more destructuring
// so the selectSong action creator gets passed to teh component as a prop
export default connect(mapStateToProps, { selectSong })(SongList);