import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{
    constructor() {
        super();

        this.nav = React.createRef();
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            news: false,
            newest: false,
            ask: false,
            show: false,
            jobs: false
        }
    }

    componentDidMount() {
        this.changeClassName();
    }

    changeClassName() {
        const link = window.location.pathname.split('/').slice(-2)[0];
        //const children = this.nav.current.children;
        const links = document.querySelectorAll('.Nav a');

        for (let i = 0; i < links.length; i++) {
            const active = links[i].href.split('/').slice(-2)[0];
            
            if (link === active) {
                this.setState({
                    [link]: true
                })
            }
        }
    }

    handleClick(target) {
        const active = target.target.href.split('/').slice(-2)[0];

        this.setState({
            news: false,
            show: false,
            newest: false,
            ask: false,
            jobs: false,
            [active]: true
        });
        //target.target.classList.add('active');
        //target.target.pointerEvents = 'none'
        //console.log(target.target.pointerEvents = 'none')
    }

    render() {
        return(
            <div className = 'Nav' ref = {this.nav}>
                <Link
                    to = '/news/1'
                    className = {this.state.news ? 'active' : ''}
                    onClick = {this.handleClick}
                >
                    React HN
                </Link>
                <div className = 'nav-second' >
                    <span className = 'nav-separator' ></span>
                    <Link
                        to = '/newest/1'
                        className = {this.state.newest ? 'active' : ''}
                        onClick = {this.handleClick}
                    >
                        New
                    </Link>
                    <span className = 'nav-separator' ></span>
                    <Link
                        to = '/ask/1'
                        className = {this.state.ask ? 'active' : ''}
                        onClick = {this.handleClick}
                    >
                        Ask
                    </Link>
                    <span className = 'nav-separator' ></span>
                    <Link
                        to = '/show/1'
                        className = {this.state.show ? 'active' : ''}
                        onClick = {this.handleClick}
                    >
                        Show
                    </Link>
                    <span className = 'nav-separator' ></span>
                    <Link
                        to = '/jobs/1'
                        className = {this.state.jobs ? 'active' : ''}
                        onClick = {this.handleClick}
                    >
                        Jobs
                    </Link>
                </div>
            </div>
        );
    }
}

export default Nav;