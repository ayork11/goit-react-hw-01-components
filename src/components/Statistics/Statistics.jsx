import React from "react"
import css from './Statistics.module.css';
import data from "components/Statistics/data.json"


export default class Statistics extends React.Component {
     render() {
        return (
            <section className={css.container}>
                <div className={css.statisticsContainer}>
                    <h2 className={css.uploadStatsContainer}>Upload stats</h2>
                    <ul className={css.listStatsContainer}>
                        <li className={css.listStatsItem}>
                            <span>{data[0].label}</span>
                            <span>{data[0].percentage}</span>
                        </li>
                        <li className={css.listStatsItem}>
                            <span>{data[1].label}</span>
                            <span>{data[1].percentage}</span>
                        </li>
                        <li className={css.listStatsItem}>
                            <span>{data[2].label}</span>
                            <span>{data[2].percentage}</span>
                        </li>
                        <li className={css.listStatsItem}>
                            <span>{data[3].label}</span>
                            <span>{data[3].percentage}</span>
                        </li>
                        <li className={css.listStatsItem}>
                            <span>{data[4].label} </span>
                            <span>{data[4].percentage}</span>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
    