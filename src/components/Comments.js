import React from 'react';
import Comment from './Comment';
import {Link} from 'react-router-dom';
import NewsItem from './NewsItem';
import CircularProgress from '@material-ui/core/CircularProgress';

class Comments extends React.Component {
    _isMounted = false;

    constructor(props){
        super(props);

        this.arrCom = [];
        this.state = {
            comments: [],
            stop: false,
            parent: props.parent,
            loading: <div className = 'loading' ><CircularProgress /></div>
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if(this.props.btnBack && !Array.isArray(this.props.commentsId)) {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', `https://hacker-news.firebaseio.com/v0/item/${this.props.commentsId}.json?print=pretty`);
            xhr.send();

            xhr.onreadystatechange = () => {
                if(xhr.readyState !== 4) return;

                if (xhr.status !== 200) {
                    this.loadError(xhr);
                }
                else {
                    const comments = JSON.parse(xhr.responseText)

                    if(comments && comments.kids) {
                        this.getComId(comments.kids)
                    }
                    else if (comments === null) {
                        this.setState({
                            loading: <div className = 'loading' >Comments not found</div>
                        })
                    }
                    if(!this.state.parent && this.props.btnBack) {
                        this.getParent();
                    }
                }
            }
        }
        else  this.getComId(this.props.commentsId)
    }

    getComId(commentsId) {
        for (let i = 0; i < commentsId.length; i++) {
            this.getComment(commentsId[i], i, commentsId.length);
        }
    }

    getComment(id, i, length) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                this.loadError(xhr);
            }
            else {
                const comment = JSON.parse(xhr.responseText);
                
                this.arrCom[i] = comment;

                if (this.arrCom.length === length && this._isMounted) {
                    const arr = this.arrCom.filter(item => item).filter(item => !item.deleted);

                    this.setState({
                        comments: arr,
                        stop: true
                    })
                }
                
            }
        }
    }

    loadError(xhr) {
        //console.log(xhr.status, xhr.statusText)
        this.setState({
            loading: <div className = 'loading' >{`${xhr.status} ${xhr.statusText}. Please try againe later or refresh page`}</div>
        });
    }

    getParent() {
        let xhr = new XMLHttpRequest();
        const id = window.location.pathname.split('/').slice(-1)[0];

        xhr.open('GET', `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                this.loadError(xhr);
            }
            else {
                const parent = JSON.parse(xhr.responseText);

                this.setState({
                    parent: parent
                })
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const loading = this.state.loading;
        const comments = this.state.comments.map(item => 
            <Comment 
                by = {item.by}
                text = {item.text}
                key = {item.id}
                replies = {item.kids ? item.kids : null}
                handleClick = {this.props.handleClick}
                time = {item.time}
            />
            );
        const parent = this.state.parent;
        const parentItem = parent ? 
            <NewsItem 
                title = {parent.title}
                by = {parent.by}
                url = {parent.url}
                score = {parent.score}
                key  = {parent.id}
                //number = {number + 1 + this.state.getMore}
                handleClick = {this.props.handleClick} 
                //comments = {parent.kids}
                time = {parent.time}
                id = {parent.id}
                item = {parent}
                text = {parent.text ? parent.text : null}
            /> : null; 
        return(
            <div>
                {this.props.btnBack && parentItem}
                <div>
                {this.state.stop ? comments : loading}
                </div>
            </div>
        );
    }
}

export default Comments;