import React from 'react';
import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData);

        return (
            <div>
                <h2>Hello world!</h2>
                <Link to="/single">Single Story</Link>
                <div className="row">
                    {
                        allData.posts.map((story, i) => (
                            <div key={i} className="card col-md-4">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{story.title.rendered}</h5>
                                    <p className="card-text">{story.excerpt.rendered}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Home;