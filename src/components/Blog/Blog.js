import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Ques and Ans Blog</h2>
            <div className="ques-ans">
                <img src="images/qna-1.jpg" alt="" />
                <div>
                    <h3> <span>Q1: </span>What is the purpose of Context API?</h3>
                    <p><span>Ans: </span>React's Context API is a unified component structure that lets us share data across all layers of our application. The context API helps to avoid props drilling in react application. <br /> <br /> In React, the data can be pass only in one direction (top to bottom) via props. Before the context API, we could use a modules to solve this. Basically context API helps us to ignore props drilling and send the data in the actual component. Using React Context allows us to avoid passing props unnecessarily to all those intermediate components that do not require them.</p>
                </div>
            </div>
            <div className="ques-ans">
                <img src="images/qna-2.png" alt="" />
                <div>
                    <h3> <span>Q2: </span>What is Semantic Tag?</h3>
                    <p><span>Ans: </span>HTML tag is a markup language to describe documents on the website, but now people wanted to share the actual meaning of the tags. A semantic tag clearly describe the meaning of HTML tags to both the browser and the developer. There are some semantic tag that can be used to define different part of a website. <br /> <br /> As the use of visually designed layout progress, a semantic tags are very useful and meaningful. First of all, semantic tag is much easier to read. It has also greater accessibility. But still many websites use ono-semantic tags as well.
                    </p>
                </div>
            </div>
            <div className="ques-ans">
                <img className='img-border' src="images/qna-3.png" alt="" />
                <div>
                    <h3> <span>Q3: </span>What are the difference between inline, block and inline block elements?</h3>
                    <p><span>Ans: </span>The difference between inline, block and inline block elements are:
                        <ul>
                            <li><span>Inline Elements: </span>The element doesn't start on a new line and only occupy just the width it requires. There is no option to set the width or hight by default.</li>
                            <li><span>Block Elements: </span>The block elements will start on a new line and occupy the full width available. It can set the hight an width values.</li>
                            <li><span>Inline-Block Elements: </span>It seems like inline elements. where it doesn't start on a new line. But it ca se width and height values.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;