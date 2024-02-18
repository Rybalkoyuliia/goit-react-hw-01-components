import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import styled from 'styled-components';

const Span = styled.span`
  background-color: ${friend => (friend.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
`;

export const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <div className={s.status}>
            <Span isOnline={friend.isOnline}> </Span>
          </div>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avarat: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
