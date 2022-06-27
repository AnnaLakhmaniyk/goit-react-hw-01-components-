import PropTypes from 'prop-types';
import Statistics from './Statistics';
import colorRandom from './colorRandom';
import s from './Statistics.module.css';
function StatisticsList({ items, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title} </h2>}
      <ul className={s.statList}>
        {items.map(item => (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: colorRandom() }}
          >
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
StatisticsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};
export default StatisticsList;
