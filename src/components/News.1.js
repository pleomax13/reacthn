import React from 'react';
import NewsItem from './NewsItem';
import User from './User';
import Comments from './Comments';
import {Link, Switch, Route} from 'react-router-dom';

class News extends React.Component {
    constructor() {
        super();

        this.arr = [];
        this.maxNewsOnPage = 25;
        this.flag = false;

        this.state = {
            newsArr: [],
            stop: false,
            getMore: 0,
            renderUser: false,
            renderCom: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.getNewsId();
    }

    getNewsId(prev) {
        if (!this.flag) {
            this.flag = true 
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log(xhr.status)
            }
            else if (prev) {
                this.news(JSON.parse(xhr.responseText), prev)
            } 
            else {
                this.news(JSON.parse(xhr.responseText))
            }
        }}
    }

    componentDidUpdate() {
        console.log('update')
    }

    news(newsArrayId, prev) {
        this.setState({
            stop: false,
            getMore: prev ? ((this.state.getMore) - this.maxNewsOnPage) : this.state.getMore
        })
       const maxLength = prev ? ((this.state.getMore) - this.maxNewsOnPage) : ((this.state.getMore) + this.maxNewsOnPage)
       let number = 0;
       if (prev) {
            for (let i = maxLength; i < this.state.getMore; i++) {
                this.getNews(newsArrayId[i], prev, number); 
                number++;       
            }
       } else {
            for (let i = this.state.getMore; i < maxLength; i++) {
                this.getNews(newsArrayId[i], prev, number); 
                number++;       
            }
       }
    }

    getNews(id, prev, number) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET',  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log(xhr.status)
            }
            else {              
                this.arr[number] = JSON.parse(xhr.responseText);
                
                let arr = this.arr.filter(item => item !== null);

                if (this.arr.length === this.maxNewsOnPage) {
                    this.setState({
                        newsArr: arr,
                        stop: true,
                        getMore: prev ? this.state.getMore : ((this.state.getMore) + this.maxNewsOnPage)
                    })
                    this.arr = [] 
                    this.flag = false  
                }
            }
        }
    }

    handleClick(id) {
        if (!Array.isArray(id) && id) {
            this.setState({
                renderUser: true,
                userId: id,
                renderCom: false
            })
        } 
        else if (Array.isArray(id)) {
                this.setState({
                    renderCom: true,
                    commentsId: id
                })
            }
            else {
                this.setState({
                    renderUser: false,
                    renderCom: false
                })
            }
    }

    render() {
        let news = 'loading...';
        if (this.state.stop) {
            news = this.state.newsArr.map((item, number) =>
                <NewsItem 
                    title = {item.title}
                    by = {item.by}
                    url = {item.url}
                    score = {item.score}
                    key  = {item.id}
                    number = {number + 1 + this.state.getMore - this.maxNewsOnPage}
                    handleClick = {this.handleClick} 
                    comments = {item.kids}
                    time = {item.time}
                    id = {item.id}
                />
            )
        }
        return(
            <>
            {(!this.state.renderUser && !this.state.renderCom) &&
            <div>
                <button
                    onClick = {() => this.getNewsId(true)}
                    disabled = {this.state.getMore === 25 || !this.state.stop ? true : false}
                >
                    Prev
                </button>
                <button
                    onClick = {() => this.getNewsId()}
                    disabled = {!this.state.stop ? true : false}
                >
                    More
                </button>
                {news}
            </div>}
            {this.state.renderUser &&
                <User 
                    id = {this.state.userId} 
                    //handleClick = {this.handleClick}
                />
            }
            {this.state.renderCom &&
                <Comments 
                    //handleClick = {this.handleClick}
                    commentsId = {this.state.commentsId}
                    btnBack = {true}
                />
            }
            </>
        );
    }
}

export default News;