import React from 'react';
import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData);
        let post = allData.posts[5]
        console.log(post)
        return (
            <div className="container-fluid">
                <div className="ml-md-5 mr-md-5 bg-white pt-2 pb-2">
                    <div className="pl-md-5 pr-md-5">
                        <div className="row">
                            <div className="col-sm-1 col-lg-1">
                                <h4 className="pr-1 pl-1 font-weight-bold">اہم خبریں</h4>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 mb-5">
                                <Link className="title" to={post.link}>
                                    <div className="bg-light border border-danger border-left-0 border-right-0 border-bottom-0">
                                        <div className="row pr-sm-2 pl-sm-2 pl-md-0">
                                            <div className="col-lg-8 m-0 pr-md-0 order-lg-1">
                                                <img className="img-fluid" src={post.images.large} alt="Card image cap" />
                                            </div>
                                            <div className="col-lg-4 p-3">
                                                <h3 className="" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                <p className="" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                                <div className="text-danger">وقتِ اشاعت: <span className="text-info">{new Date(post.modified).toLocaleTimeString()}</span></div>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-3 m-0 pr-md-0 col-sm col-lg-3 mb-5 bg-light">
                                <div className="border border-danger border-left-0 border-right-0 border-bottom-0">
                                    <Link className="title" to={post.link}>
                                        <div className="m-0 pr-md-0">
                                            <img className="img-fluid" src={post.images.large} alt="Card image cap" />
                                        </div>
                                        <h4 className="p-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                </div>
            </div>
        );
    }
}

export default Home;