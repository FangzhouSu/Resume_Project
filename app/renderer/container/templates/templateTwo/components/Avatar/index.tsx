/**
 * @desc 头像
 * @author huangying
 */
import React from 'react';
import './index.less';
import AvatarImage from '@assets/avatar.jpg';

function Avatar() {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;
