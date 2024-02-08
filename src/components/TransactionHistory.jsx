export default function TransactionHistory ({items}){
    return(
<table className="transaction-table">
  <thead>
    <tr>
      <th className="transaction-title">Type</th>
      <th className="transaction-title">Amount</th>
      <th className="transaction-title">Currency</th>
    </tr>
  </thead>

  <tbody>
    {
        items.map((item) => (<tr key={item.id}>
            <td className="transaction-td">{item.type}</td>
            <td className="transaction-td">{item.amount}</td>
            <td className="transaction-td">{item.currency}</td>
        </tr> ))
    }
  </tbody>
</table>

    )
}
