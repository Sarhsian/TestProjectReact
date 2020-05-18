import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
    <div>
        <img alt="car" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-bmw-7-series-730ld-2019-uk-fd-hero-front.jpg?itok=3hIdcBPu"/>
    </div>
    <div className={s.descriptionBlock}>
      ava+description
  </div>
  </div>
}

export default ProfileInfo;

