import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { selectSong } from '../actions';

//since redux handles state, we can use functional instead of class components as we will
//very rarely be using state directly in the component when using redux
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;