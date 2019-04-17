import React from 'react';
import parce from 'html-react-parser';
import Comments from './Comments';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import './Comment.css';
import Collapse from '@material-ui/core/Collapse';

class Comment extends React.Component {
    constructor() {
        super();

        this.state = {
            isHidden: false
        }

        this.handleHide = this.handleHide.bind(this);
    }

    handleHide() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const text = this.props.text;

        return(
            <div>
                <div
                    className = 'comment-header'
                >
                    {/*<div className = 'comments-tree-indicator' ></div>*/}
                    <Link 
                        to = {`/user/${this.props.by}`}
                        onClick = {() => this.props.handleClick(this.props.by)}
                        className = 'comment-user'
                    >
                        {this.props.by}
                    </Link>
                    <span 
                        onClick = {this.handleHide} 
                        className = 'comment-button-hide'
                        title = {`${this.state.isHidden ? 'View' : 'Hide'}`}
                    >
                        {this.state.isHidden ? '[ + ]' : '[ - ]'}
                    </span>
                </div>
                <div
                        className = 'comment-time'
                    >
                        <Moment fromNow unix>
                            {this.props.time}
                        </Moment>
                </div>
                <Collapse
                    in = {!this.state.isHidden}
                >
                    <div
                        className = 'comment-text'
                    >
                        {parce(text)}
                    </div>
                    {
                        this.props.replies &&
                        <div style = {{marginLeft: '20px'}}>
                            <Comments 
                                commentsId = {this.props.replies}
                                handleClick = {this.props.handleClick}
                            />
                        </div>
                    }
                </Collapse>
            </div>
        );
    }
}

export default Comment;