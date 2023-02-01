import React from "react"
import css from './TransactionHistory.module.css';

export default class TransactionHistory extends React.Component {
    render() {
            const transaction = [];
            this.props.transdata.forEach((transactions) => {
                transaction.push(
                    <tbody>
                        <tr>
                            <td className={css.idContent}>{transactions.id}</td>
                            <td>{transactions.type}</td>
                            <td>{transactions.amount}</td>
                            <td>{transactions.currency}</td>
                        </tr>
                    </tbody>
      )
    });

        return (
        <table>
            <thead>
                <tr className={css.titlesContainer}>
                    <th>id</th>
                    <th>type</th>
                    <th>amount</th>
                    <th>currency</th>
                </tr>
            </thead>
      <tr>
        {transaction}
                </tr>
    </table>
      );
  }
  }
                     
    