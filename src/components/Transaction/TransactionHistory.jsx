import css from './Transaction.module.css';
export default function TransactionHistory ({items}){
    return(
<table className={css.transactionTable}>
  <thead>
    <tr>
      <th className={css.transactionTitle}>Type</th>
      <th className={css.transactionTitle}>Amount</th>
      <th className={css.transactionTitle}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
        items.map((item) => (<tr key={item.id}>
            <td className={css.transactionTd}>{item.type}</td>
            <td className={css.transactionTd}>{item.amount}</td>
            <td className={css.transactionTd}>{item.currency}</td>
        </tr> ))
    }
  </tbody>
</table>

    )
}
