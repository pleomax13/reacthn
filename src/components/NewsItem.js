import React from 'react';
import Moment from 'react-moment';
import {Link, Switch, Route} from 'react-router-dom';
import parce from 'html-react-parser';
import './NewsItem.css';

class NewsItem extends React.Component {
    render() {
        return(
            <div
                className = 'NewsItem'
            >
                {
                    this.props.number &&
                    <div
                        className = 'post-number'
                    >
                        {this.props.number}.
                    </div>
                }
                <h4
                    className = 'post-name'
                >
                    {
                        this.props.url ?
                        <a 
                            href = {this.props.url}
                        >
                            {this.props.title}
                        </a> :
                        <Link
                            to = {`/item/${this.props.id}`}
                            onClick = {() => this.props.handleClick(this.props.comments, this.props.id, this.props.item)}
                        >
                            {this.props.title}
                        </Link>
                    }
                </h4>
                <div
                    className = 'post-description'
                >
                    <span
                        className = 'post-points'
                    >
                        {this.props.score} points
                    </span>
                    <span>
                        <span
                            style = {{
                                marginRight: 0
                            }}
                        >by </span>
                        <Link 
                            to = {`/user/${this.props.by}`}
                            onClick = {() => this.props.handleClick(this.props.by)}
                        >
                            {this.props.by}
                        </Link>
                    </span>
                    <span
                        className = 'post-time'
                    >
                        <Moment
                            fromNow
                            unix
                        >
                                {this.props.time}
                        </Moment>
                    </span>
                    <span>
                        {
                            this.props.comments &&
                            <>
                                <span>|</span>
                                <span
                                    className = 'post-view-comments'
                                >
                                    <Link
                                        to = {`/item/${this.props.id}`}
                                        onClick = {() => this.props.handleClick(this.props.comments, this.props.id, this.props.item)}
                                    >
                                        View comments
                                    </Link>
                                </span>
                            </>
                        }
                    </span>
                </div>
                {
                    this.props.text &&
                    <div
                        className = 'post-text'
                    >
                        {parce(this.props.text)}
                    </div>
                }
            </div>
        );
    }
}

export default NewsItem;