import React from 'react';
import './postCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
class PostCard extends React.Component {
    render() {
        return (
            <a href={this.props.data.id}>
            <div key={this.props.data.id} className="postcard-blocks">
                <div className="postcard">
                    <div className="postcard_authors">
                        <span className="create_name">Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="postcard_img">
                        <img src={this.props.data.image} className="postcard__img" alt=""/>
                    </div>
                    <div className="postcard_title">
                        <a href="\home">{this.props.data.title}</a>
                        {this.props.data.image}
                    </div>
                    <div className="postcard_func">
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsUp}  /> 5 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsDown} /> 2 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faCommentAlt}  /> 33 </span>
                    </div>
                </div>
            </div>
            </a>
        )
    }
}

export default PostCard;
