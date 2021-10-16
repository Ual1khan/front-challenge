import React, { useContext } from 'react';
import Category from '../../components/Category/Category';
import JobList from '../../components/JobList/JobList';
import JobContext from '../../contexts/job.context';

import styles from './Main.module.scss';

const Main = () => {

    const { filters } = useContext(JobContext);

    return (
        <>
            <header className={styles.header}></header>
            <div className={styles.main}>
                {filters.length > 0 &&
                    <Category />
                }
                <JobList />
            </div>
        </>
    )
}

export default Main;
