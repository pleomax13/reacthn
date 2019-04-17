import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from './News';
import './Main.css';

class Main extends React.Component {
    componentDidMount () {
        console.log(window.location.pathname)
        if (window.location.pathname === '/reacthn/') {
            window.location = '/reacthn/news/1';
        }
    }

    render() {
        return(
            <div className = 'Main' >
                <Switch>
                        <Route 
                            exact path = '/news/:id'
                            render = {() => 
                            <News 
                                show = 'topstories'
                            />
                            }
                        />
                        <Route 
                            path = '/ask/:id'
                            render = {() => 
                            <News 
                                show = 'askstories'
                            />
                            }
                        />
                        <Route 
                            path = '/jobs/:id'
                            render = {() => 
                            <News 
                                show = 'jobstories'
                            />
                            }
                        />
                        <Route 
                            path = '/show/:id'
                            render = {() => 
                            <News 
                                show = 'showstories'
                            />
                            }
                        />
                        <Route 
                            path = '/user'
                            render = {() => 
                            <News 
                                //show = 'user'
                            />
                            }
                        />
                        <Route 
                            path = '/item'
                            render = {() => 
                            <News 
                                //show = 'item'
                            />
                            }
                        />
                        <Route 
                            path = '/newest/:id'
                            render = {() => 
                            <News 
                                show = 'newstories'
                            />
                            }
                        />
                        {
                            window.location.pathname === '/reacthn/' ? null :
                            <Route render = {() =>
                                    <h1 style = {{ textAlign: 'center' }}>Not Found</h1>
                                } />
                        }
                </Switch>
            </div>
        );
    }
}

export default Main;