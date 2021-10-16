import { createContext, useEffect, useState } from "react";
import { getAllJobs } from "../services/job.service";
import { IJob } from "../types/Job";

interface Props {
    children: React.ReactNode;
}

const initialJobs: IJob[] = [];
const initialFilters: string[] = [];

const JobContext = createContext({
    jobs: initialJobs,
    filters: initialFilters,
    filteredJobs: initialJobs,
    addFilter: (tag: string) => {},
    removeFilter: (tag: string) => {},
    removeAllFilter: () => {},
});

export const JobProvider = ({ children }: Props) => {

    const [jobs, setJobs] = useState<IJob[]>(initialJobs);
    const [filters, setFilters] = useState<string[]>(initialFilters);
    const [filteredJobs, setFilteredJobs] = useState<IJob[]>(initialJobs);

    useEffect(() => {    
        getAllJobs()
          .then((res) => {
              setJobs(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
    }, []);


    const addFilter = (tag: string) => {
        !filters.includes(tag) && 
        setFilters([...filters, tag]);
    };

    const removeFilter = (tag: string) => {
        const newFilters = filters.filter(item => item !== tag);
        setFilters(newFilters);
    }

    const removeAllFilter = () => {
        setFilters([]);
    }
    
    const containsAll = (obj: IJob, filters: string[]) => {
        for(const str of filters){
            const target = Object.values(obj);
            if(target.includes(str) || target[11].includes(str) || target[12].includes(str)){
                continue;
            }else{
                return false;
            }
        }
        return true;
     };

    useEffect(() => {
        let fJobs: IJob[] = [];
        jobs.forEach(job => {
            if(containsAll(job, filters)) {
                fJobs.push(job);
            }
        })
        setFilteredJobs(fJobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

  return (
    <JobContext.Provider
      value={{
          jobs,
          filters,
          filteredJobs,
          addFilter,
          removeFilter,
          removeAllFilter,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
