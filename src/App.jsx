import Painting from './components/Painting/Painting';
import StatisticsList from 'components/Statistics/StatisticsList';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistoryList from 'components/TransactionHistory/TransactionHistoryList';
import Section from 'components/Sections/Section';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div>
      <Section>
        <Painting
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <StatisticsList items={data} title="Upload stats" />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistoryList items={transactions} />
      </Section>
    </div>
  );
};
