import React from 'react';

import { data } from '../../data/data.js';

import './BlogList.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {data.map((post, index) => (
        <div className = 'blogItem' key = {index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))}    
    </div>
);