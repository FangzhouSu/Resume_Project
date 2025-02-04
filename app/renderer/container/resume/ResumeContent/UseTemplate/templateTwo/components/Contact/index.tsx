/**
 * @desc 联系方式
 * @author huangying
 */
import React from 'react';
import '../../../styles/template-one.less';
import { useSelector } from 'react-redux';

function Contact() {
  // useSelector 从Redux store中提取数据
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
      </ul>
    </div>
  );
}

export default Contact;
