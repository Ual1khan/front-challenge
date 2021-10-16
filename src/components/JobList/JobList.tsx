import React, { useContext } from 'react';
import JobContext from '../../contexts/job.context';
import Job from '../Job/Job';
import styles from './JobList.module.scss';


const JobList = () => {
    const { jobs, filters, filteredJobs } = useContext(JobContext);
   
    return (
        <div className={styles.list}>
            {   filters.length === 0 ?
                jobs.map(job=> (
                    <Job 
                        key={job.id}
                        id={job.id} 
                        company={job.company} 
                        logo={job.logo} 
                        new={job.new} 
                        featured={job.featured} 
                        position={job.position} 
                        role={job.role} 
                        level={job.level} 
                        postedAt={job.postedAt} 
                        contract={job.contract} 
                        location={job.location} 
                        languages={job.languages} 
                        tools={job.tools} 
                    />
                )) :
                filteredJobs.map(job=> (
                    <Job 
                        key={job.id}
                        id={job.id} 
                        company={job.company} 
                        logo={job.logo} 
                        new={job.new} 
                        featured={job.featured} 
                        position={job.position} 
                        role={job.role} 
                        level={job.level} 
                        postedAt={job.postedAt} 
                        contract={job.contract} 
                        location={job.location} 
                        languages={job.languages} 
                        tools={job.tools} 
                    />
                ))

            } 
        </div>
    )
}

export default JobList;
