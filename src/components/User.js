import React from 'react';
import parce from 'html-react-parser';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import './User.css';

class User extends React.Component {
    _isMounted = false;

    constructor() {
        super();

        this.state = {
            about: '',
            created: '',
            id: '',
            karma: 0,
            submitted: [],
            stop: false, 
            loading: <div className = 'loading' ><CircularProgress /></div>
        }
    }

    loadError(xhr) {
        console.log(xhr.status, xhr.statusText)
        this.setState({
            loading: <div className = 'loading' >{`${xhr.status} ${xhr.statusText}. Please try againe later or refresh page`}</div>
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', `https://hacker-news.firebaseio.com/v0/user/${this.props.id}.json?print=pretty`);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                this.loadError(xhr);
            }
            else {
                const user = JSON.parse(xhr.responseText);
                console.log(user)
                if (this._isMounted && user) {
                    this.setState({
                        about: user.about ? parce(user.about) : null,
                        created: user.created,
                        id: user.id,
                        karma: user.karma,
                        submitted: user.submitted,
                        stop: true
                    })
                }
                else if (user === null) {
                    this.setState({
                        loading: <div className = 'loading' >User not found</div>
                    })
                }
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const loading = this.state.loading;
        
        return (
            <>
            {this.state.stop ?
            <div 
                className = 'User'
            >
                <div
                    className = 'user-headlines'
                >
                    <span>user:</span>
                    <span>created:</span>
                    <span>karma:</span>
                    {
                        this.state.about &&
                        <span>about:</span>
                    }
                </div>
                <div
                    className = 'user-name'
                >
                   {this.state.id}
                </div>
                <div
                    className = 'user-created'
                >
                    <Moment 
                        unix
                        format = ' MMMM DD, YYYY'
                    >
                        {this.state.created}
                    </Moment>
                </div>
                <div
                    className = 'user-karma'
                >
                    {this.state.karma}
                </div>
                {
                    this.state.about &&
                    <div 
                        className = 'user-about'
                    >
                    {this.state.about}
                    </div>
                }
                {/*<button onClick = {() => window.history.back()}>
                    Back
            </button>
                <Link
                    to = '/news/1'
                >
                    Home
                </Link>*/}
            </div> : loading}
            </>
        );
    }
}

export default User;