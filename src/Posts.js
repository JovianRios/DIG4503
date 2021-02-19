import React, { componentdidmount, useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] =  useState();

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);

    return (
        <div>
            <h1>User Posts</h1>
            {posts &&
            posts.map((post) => {
                const {id, title, body} = post;
                return (
                    <div key={id}>
                        <h4>User ID: {id}</h4>
                        <h5>Title: {title}</h5>
                        <h6>Body: {body}</h6>
                        </div>
                )
            })}
        </div>
    );
};

export default Posts;