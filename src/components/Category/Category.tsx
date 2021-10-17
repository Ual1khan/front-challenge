import React, { useContext } from 'react';
import JobContext from '../../contexts/job.context';
import {ReactComponent as RemoveButton} from '../../assets/remove.svg';
import styles from './Category.module.scss';

const Category = () => {

    const { filters, removeFilter, removeAllFilter } = useContext(JobContext);

    return (
        <div className={styles.category}>
            <div className={styles.category_tags}>
                <div>
                    {
                        filters.map((filter, index) => (
                            <div className={styles.category_tag} key={index}>
                                <div>
                                    <span>{filter}</span>
                                </div>
                                <span 
                                    className={styles.category_remove} 
                                    onClick={() => removeFilter(filter)}>
                                        <RemoveButton />
                                </span>
                            </div>
                        ))
                    }
                </div>
                <span className={styles.category_tags_removeall} onClick={() => removeAllFilter()}>
                    Clear
                </span>
            </div>
        </div>
    )
}

export default Category;
