import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendsList } from './FriendsList/FriendsList.jsx';
import { Transactions } from './Transactions/Transactions.jsx';
import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import '../index.css';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
