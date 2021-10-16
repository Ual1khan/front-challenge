import React, { useContext } from 'react';
import styles from './Job.module.scss';
import { IJob } from '../../types/Job';
import JobContext from '../../contexts/job.context';


const Job = (props: IJob) => {

    const { addFilter } = useContext(JobContext);

    return (
        <div className={styles.job}>
            {props.featured && <div className={styles.featured}></div>}
            <div className={styles.job_main}>
                <div className={styles.job_info}>
                    <div className={styles.job_img}>
                        <img src={props.logo} alt="logo" />
                    </div>
                    <div className={styles.job_content}>
                        <span className={styles.job_content_company}>{props.company}</span>
                        {props.new && <span className={styles.job_content_new}>NEW!</span>}
                        {props.featured && <span className={styles.job_content_featured}>FEATURED</span>}
                        <div className={styles.job_content_position}>{props.position}</div>
                        <div className={styles.job_content_condition}>
                            <span>{props.postedAt}</span> · 
                            <span>{props.contract}</span> · 
                            <span>{props.location}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.job_tags}>
                    <div onClick={() => addFilter(props.role)}><span>{props.role}</span></div>
                    <div onClick={() => addFilter(props.level)}><span>{props.level}</span></div>
                    {props.languages.map((language, i) => (
                        <div key={i} onClick={() => addFilter(language)}><span>{language}</span></div>
                    ))}
                    {props.tools.map((tool, i) => (
                        <div key={i} onClick={() => addFilter(tool)}><span>{tool}</span></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Job;
