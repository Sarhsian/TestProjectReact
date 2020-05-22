import React from 'react';
import './Content.module.css';
import MyPostsConteiner from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
    return <div>
    <ProfileInfo />
    <MyPostsConteiner />
  </div>
}

export default Content;

