import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/jobSlice';
import JobCard from './JobCard';

const JobList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.jobs);
  const loadingRef = useRef(false);
  const observer = useRef();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, items.length]);

  useEffect(() => {
    loadingRef.current = status === 'loading';
  }, [status]);

  return (
    <div className="job-list">
      {items.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default JobList;