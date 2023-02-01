import Profile  from 'components/Profile/Profile'
import user  from 'components/Profile/user.json'
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transdata={transactions} />
    </div>
  );
};
