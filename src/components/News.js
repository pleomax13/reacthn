import React from 'react';
import NewsItem from './NewsItem';
import User from './User';
import Comments from './Comments';
import {Link, Switch, Route} from 'react-router-dom';
import './News.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PagesLinks from './PagesLinks';

class News extends React.Component {
    _update = 0;
    constructor(props) {
        super(props);

        this.arr = [];
        this.maxNewsOnPage = 25;
        this.flag = false;

        this.state = {
            newsArr: [],
            stop: true,
            getMore: 0,
            renderUser: false,
            renderCom: false,
            loading: <div className = 'loading' ><CircularProgress /></div>
        }

        this.handleClick = this.handleClick.bind(this);
        switch(props.show) {
            case 'topstories':
                this.show = 'news';
                break;
            case 'askstories':
                this.show = 'ask';
                break;
            case 'jobstories':
                this.show = 'jobs';
                break;
            case 'showstories':
                this.show = 'show';
                break;
            case 'newstories':
                this.show = 'newest';
                break;
            default:
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const location = window.location.pathname.split('/').slice(-2)[0];

        if (location === 'news' || location === 'ask' || location === 'jobs' || location === 'show' || location === 'newest') {
            this.getNewsId();
        }

       this.disableLinks();
    }

    disableLinks() {
        const links = document.querySelectorAll('.Nav a');

        if (!this.state.stop) {
            for (let i = 0; i < links.length; i++) {
                links[i].classList.add('disabled');
            }
            //console.log('disabled')
        } 
        else {
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove('disabled');
            }
            //console.log('active')
        }
    }

    getNewsId(currPage) {
        if (!this.flag) {
            this.setState({
                stop: false,
            })
            this.flag = true 
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://hacker-news.firebaseio.com/v0/${this.props.show}.json?print=pretty`)
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                this.loadError(xhr);
            }
            else if (currPage) {
                this.news(JSON.parse(xhr.responseText), currPage)
                //console.log(22222222)
            } 
            else {
                let location = window.location.pathname.split('/').slice(-1)[0];
                location = Number(location) ? location : 1;
                const arr = JSON.parse(xhr.responseText)
                this.news(arr, false, (location - 1) * this.maxNewsOnPage)
                this.setState({
                    length: arr.length
                })
                //console.log(arr)
            }
        }}
    }

    componentDidUpdate() {
        //console.log(`update: ${++this._update}`)
        this.disableLinks();
        const location = window.location.pathname.split('/').slice(-2)[0];
        //console.log(location)
        if(this.props.show !== this.show) {
            switch(this.props.show) {
                case 'topstories':
                    /*this.setState({
                        show: 'news'
                    })*/
                    this.show = 'news'
                    break;
                case 'askstories':
                    /*this.setState({
                        show: 'ask'
                    })*/
                    this.show = 'ask'
                    break;
                case 'jobstories':
                    /*this.setState({
                        show: 'jobs'
                    })*/
                    this.show = 'jobs'
                    break;
                case 'showstories':
                    /*this.setState({
                        show: 'show'
                    })*/
                    this.show = 'show'
                    break;
                case 'newstories':
                    /*this.setState({
                        show: 'show'
                    })*/
                    this.show = 'newest'
                    break;
                default:
            }
        }
       // if (/*location.slice(-1) == 'news' || location.slice(-2) == 'user' || location.slice(-2) == 'item'*/this._isMounted) {
            //this.getNewsId();
       // }
       if (location === 'news' || location === 'ask' || location === 'jobs' || location === 'show' || location === 'newest') {
        this.getNewsId();
        //console.log(11111)
   }
    }

    news(newsArrayId, currPage, location) {
        this.setState({
            stop: false,
            getMore: currPage ?  currPage : location
        })
        //console.log(11111111)
       //const maxLength = currPage ? ((this.state.getMore) - this.maxNewsOnPage) : (this.maxNewsOnPage)
       const maxLength = currPage ? currPage : location
       let number = 0;
       let max = maxLength + this.maxNewsOnPage;
       let arrLength = this.maxNewsOnPage;
       /*if (currPage) {
            for (let i = maxLength; i < this.state.getMore; i++) {
                this.getNews(newsArrayId[i], currPage, number); 
                number++;       
            }
       } else {
            for (let i = this.state.getMore; i < maxLength; i++) {
                this.getNews(newsArrayId[i], currPage, number); 
                number++;       
            }*/
        //if((newsArrayId.length % this.maxNewsOnPage) > 0) {
           // max = newsArrayId.length;
           // arrLength = newsArrayId.length % this.maxNewsOnPage;
       //}

        for (let i = maxLength; i < max; i++) {
            if(!newsArrayId[i+1]) {
                this.getNews(newsArrayId[i], number+1, number); 
                break;
            } 
            else {
                this.getNews(newsArrayId[i], arrLength, number); 
                number++;
            }  
        } 
       //}
    }

    loadError(xhr) {
        //console.log(xhr.status, xhr.statusText)
        this.setState({
            loading: <div className = 'loading' >{`${xhr.status} ${xhr.statusText}. Please try againe later or refresh page`}</div>
        });
    }

    getNews(id, max, number) {
        //if(id) {
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET',  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                this.loadError(xhr);
            }
            else { 
                let arr;
                if (!this.state.stop) {
                    this.arr[number] = JSON.parse(xhr.responseText);

                    arr = this.arr.filter(item => item !== null).filter(item => !item.deleted).filter(item => !item.dead);
                    //console.log(this.arr.length,max)
                }   
                //console.log(this.arr.length, max)        
                if (this.arr.length === max) {
                    this.setState({
                        newsArr: arr,
                        stop: true,
                        //getMore: prev ? this.state.getMore : ((this.state.getMore) + this.maxNewsOnPage)
                    })
                    //console.log(this.arr)
                    this.arr = [] 
                    this.flag = false  
                }
            }
        }
   //}
    }

    handleClick(param, id, item) {
        if (!Array.isArray(param) && param) {
            this.setState({
                renderUser: true,
                userId: param,
                renderCom: false
            })
            //console.log('user')
        } 
        else if (Array.isArray(param)) {
                this.setState({
                    renderCom: true,
                    commentsId: param,
                    newsItemId: id,
                    currItem: item
                })
                //console.log(11111)
            }
            else {
                this.setState({
                    renderUser: false,
                    renderCom: false
                })
                //console.log(33333333)
            }
    }

    render() {
        let news = this.state.loading;
        let num = [];
        let currPage = 0;
        let pages = [];
        const user = this.state.userId ? this.state.userId : window.location.pathname.split('/').slice(-1)[0];
        
        if (this.state.stop) {
            const length = Math.ceil(this.state.length / this.maxNewsOnPage)
            news = this.state.newsArr.map((item, number) =>
                <NewsItem 
                    title = {item.title}
                    by = {item.by}
                    url = {item.url}
                    score = {item.score}
                    key  = {item.id}
                    number = {number + 1 + this.state.getMore}
                    handleClick = {this.handleClick} 
                    comments = {item.kids}
                    time = {item.time}
                    id = {item.id}
                    item = {item}
                />
            )
            
            for (let i = 1; i <= length; ++i) {
                num[i-1] = {
                    page: i,
                    currPage: currPage
                }
                currPage = currPage + this.maxNewsOnPage
            }

            if(num.length === length) {
                /*const active = Number(window.location.pathname.split('/').slice(-1)[0]);
                
                if (active > 2) {
                    num = num.slice(active-3, active+2);
                } 
                else if (num.length >= 5) {
                    num = num.slice(0, 5);
                }

                pages = num.map((item) =>
                    <Button
                        key = {item.page}
                        size = 'small'
                        disabled = {item.page === active ? true : false}
                        component = {Link}
                        onClick = {() => this.getNewsId(item.currPage)}
                        to = {`/${this.show}/${item.page}`}
                        //className = {`page`}
                    >
                        {item.page}
                    </Button>
                    )*/
                pages = <PagesLinks 
                    show = {this.show}
                    num = {num}
                    getNewsId = {() => this.getNewsId}
                />
            }
        }

        return(
            <Switch>
                <Route 
                    exact path = {`/${this.show}/:id`}
                    render = {() => 
                        <div>
                            {pages}
                            {news}
                            {pages}
                        </div>
                    }
                />
                {/*<Route 
                    path = '/news/:id'
                    render = {() => 
                        <div>
                            {pages}
                            {news}
                            {pages}
                        </div>
                    }
                />*/}
                <Route 
                    path = {`/user/${user}`}
                    render = {() => 
                        <User 
                            id = {user} 
                            handleClick = {this.handleClick}
                            page = {this.props.show}
                        />
                    }
                />
                <Route
                    path = {`/item/${this.state.newsItemId ? this.state.newsItemId : window.location.pathname.split('/').slice(-1)[0]}`}
                    render = {() =>
                        <Comments 
                            handleClick = {this.handleClick}
                            commentsId = {this.state.commentsId ? this.state.commentsId : window.location.pathname.split('/').slice(-1)[0]}
                            btnBack = {true}
                            parent = {this.state.currItem}
                            page = {this.props.show}
                        />
                    }
                />
            </Switch>
        );
    }
}

export default News;