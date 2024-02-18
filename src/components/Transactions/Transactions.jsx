import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>
              {item.type.charAt(0).toUpperCase() + item.type.substring(1)}
            </td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
