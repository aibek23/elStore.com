import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


class Post extends React.Component {
    render() {
        return (
         
            <div className="postcard-blocks">
                <div className="post">
                    <div className="postcard_authors">
                        <span className="create_name">Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="post_title">
                        <a href="\home">Краткий пересказ Towards Pretrained Transformers As universal Computation Engines</a>                       
                    </div>
                    <div className="post_img">
                        <img src="https://hsto.org/webt/w2/bc/x5/w2bcx5gnilqogaahmsv4tlbvx0k.jpeg" className="postcard__img" alt=""/>
                    </div>
                    <p>интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииТанцую щие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана  по данным спутник овой интерферометрииТанцующие горы Ирана по данным спутниковой интерферомет рииТанцующие горы Ирана по данным  ометрииТанцующие го р ана по данным спутниковой интерферометрииТанцующие горы Ирана  по данным спутниковой интерферометрииТанцующие горы Ирана по   анным  спутниковой интерферометрииТанцующие  горы Ирана по данным с ым спутниковой интерфером етрииТанцующие горы Иран а  по данным спутниковой интерферометри  сп нцующие горы Ирана по  данным спутни вой интерферометрииТанцующие горы Ирана по дан ным   Ирана по данным спутниковой интерферометрииТанцующие горы Иран а по данным  спутни ющие горы Ирана по данным спутниковой интерферометрииТанцующие горы Ирана по данным спутниковой интерферометрииvТанцующие горы Ирана по данным спутниковой интерферометрии</p>
                    <div className="postcard_func">
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsUp}  /> 5 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsDown} /> 2 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faCommentAlt}  /> 33 </span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Post;
