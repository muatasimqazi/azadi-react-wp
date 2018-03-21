import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import Home from 'components/Home.js';
import About from 'components/About.js';
import Header from 'components/Header.js';
import SingleStory from 'components/SingleStory.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import '../styles.css'

import firebase from 'firebase/app';
var config = {
    apiKey: "AIzaSyBhhSVYs8BZTZBLi_IzlnBfI1em261oQxg",
    authDomain: "daily-azadi-quetta.firebaseapp.com",
    databaseURL: "https://daily-azadi-quetta.firebaseio.com",
    projectId: "daily-azadi-quetta",
    storageBucket: "daily-azadi-quetta.appspot.com",
    messagingSenderId: "33591772397"
  };
  firebase.initializeApp(config);

class AppInitializer {

    templates = {
        'about': About
    }

    buildRoutes(data) {
        return data.pages.map((page, i) => {
            return (
                <Route
                    key={i}
                    //component={this.templates[page.slug]}
                    component={About}
                    //path={`/${page.slug}`}
                    path={`/about`}
                    exact
                />
            )
        })
    }

    run() {
        DataActions.getPages((response) => {
            render(
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route component={SingleStory} path={`/single`} />

                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch>
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();