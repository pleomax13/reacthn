import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/ChevronLeftRounded';
import Next from '@material-ui/icons/ChevronRightRounded';
import FirstPage from '@material-ui/icons/FirstPageRounded';
import LastPage from '@material-ui/icons/LastPageRounded';

class PagesLinks extends React.Component {
    render() {
        const active = Number(window.location.pathname.split('/').slice(-1)[0]);
        let num = this.props.num;
        const show = this.props.show;
        const length = num.length;

        if (active > 2) {
            num = num.slice(active-2, active+1);
        } 
        else if (num.length >= 3) {
            num = num.slice(0, 3);
        }

        let pages = num.map((item) =>
            <Button
                key = {item.page}
                size = 'small'
                disabled = {item.page === active ? true : false}
                component = {Link}
                onClick = {() => this.props.getNewsId(item.currPage)}
                to = {`/${show}/${item.page}`}
                //className = {`page`}
                style = {{
                    minWidth: '35px'
                }}
            >
                {item.page}
            </Button>
            )
        return(
            <div
                style = {{
                    marginTop: '10px'
                }}
            >
                <IconButton
                    onClick = {() => this.props.getNewsId(1)}
                    component = {Link}
                    to = {`/${show}/1`}
                    //disabled = {active === 1 ? true : false}
                    title = 'first page'
                    style = {{
                        display: `${active === 1 || length <=2 ? 'none' : ''}`
                    }}
                >
                    <FirstPage 
                        fontSize = 'small' 
                    />
                </IconButton>
                <IconButton
                    onClick = {() => this.props.getNewsId(active-1)}
                    component = {Link}
                    to = {`/${show}/${active-1}`}
                   //disabled = {active === 1 ? true : false}
                    title = 'prev'
                    style = {{
                        display: `${active === 1 ? 'none' : ''}`
                    }}
                >
                    <Back 
                        fontSize = 'small'
                    />
                </IconButton>
                {pages}
                <IconButton
                    onClick = {() => this.props.getNewsId(active+1)}
                    component = {Link}
                    to = {`/${show}/${active+1}`}
                    //disabled = {active === length ? true : false}
                    title = 'next'
                    style = {{
                        display: `${active === length ? 'none' : ''}`
                    }}
                >
                    <Next 
                        fontSize = 'small'
                    />
                </IconButton>
                <IconButton
                    onClick = {() => this.props.getNewsId(length)}
                    component = {Link}
                    to = {`/${show}/${length}`}
                    //disabled = {active === length ? true : false}
                    title = 'last page'
                    style = {{
                        display: `${active === length || length <=2 ? 'none' : ''}`
                    }}
                >
                    <LastPage 
                        fontSize = 'small'
                    />
                </IconButton>
            </div>
        );
    }
}

export default PagesLinks;