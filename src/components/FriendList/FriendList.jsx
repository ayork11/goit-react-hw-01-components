import React from 'react';
import css from './FriendList.module.css';

export default class FriendList extends React.Component {


  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  
  
  render() {
  const users =[]
   this.props.friends.forEach((user) => {
      users.push(
        <li>
          <span>{user.name}</span>
          <img src={user.avatar} alt="User avatar" width="48px" height="48px" />
          <p>{ }</p>
        </li>
      )
    });
    
    return (
      <ul className={css.friendsContent}>
        {users}
  </ul>
    );
  }
}