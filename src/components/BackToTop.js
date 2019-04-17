import React from 'react';
import Fab from '@material-ui/core/Fab';
import Top from '@material-ui/icons/ExpandLessRounded';
import './BackToTop.css';

class BackToTop extends React.Component {
    componentDidMount() {
        const button = document.querySelector('.Top');

        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            const classConteins = button.classList.contains('back-to-top-show');

            if (!classConteins && scroll >= 100) {
                button.classList.add('back-to-top-show');
            } else if (classConteins && scroll < 100) {
                button.classList.remove('back-to-top-show');
            }
        })
    }

    scrollToTop(event) {
        event.preventDefault();
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    render() {
        return(
            <div className = 'Top' >
                <Fab
                    size = 'medium'
                    title = 'To top'
                    color = 'primary'
                    onClick = {this.scrollToTop}
                >
                    <Top/>
                </Fab>
            </div>
        );
    }
}

export default BackToTop;