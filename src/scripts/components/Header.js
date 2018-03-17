import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function (page) { return page.menu_order; }]); // Sort pages by order

        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar w/ text</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" style={{ marginRight: '10px' }} >Home</Link>
                            </li>
                            {allPages.map((page, i) => {
                                if (page.slug != 'home') {
                                    return (
                                        <li key={i} className="nav-item">
                                            <Link
                                                className="nav-link"
                                                key={page.id}
                                                to={'/about'}
                                                //to={`/${page.slug}`}
                                                style={{ marginRight: '10px' }}
                                            >
                                                {page.title.rendered}
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;