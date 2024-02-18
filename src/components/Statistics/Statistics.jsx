import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.stat_list}>
        {stats.map(item => (
          <li key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{item.label}</span>
            <span style={{ fontSize: '22px' }}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
