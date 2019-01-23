import React from 'react';

export default ({ articles }) => {
    return (
        articles.map((article, i) => {
            return <article class="col-third">
                    <img key={i} src={article.img} alt=""/>
                    <div>
                        <h3 key={i} >{article.title}</h3>
                        <p key={i} >{article.body}</p>
                        <button>Read More</button>
                    </div>
                </article>
        })
    )
};