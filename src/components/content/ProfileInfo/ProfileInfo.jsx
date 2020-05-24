import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }
    return <div>
    <div>
        <img alt="car" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-bmw-7-series-730ld-2019-uk-fd-hero-front.jpg?itok=3hIdcBPu"/>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} alt="avatar"/>
      ava+description
  </div>
  </div>
}

export default ProfileInfo;

