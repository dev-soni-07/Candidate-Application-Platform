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

  useEffect(() => {
    const handleObserver = entries => {
      const target = entries[0];
      if (target.isIntersecting && !loadingRef.current) {
        dispatch(fetchJobs());
      }
    };

    observer.current = new IntersectionObserver(handleObserver, { threshold: 1.0 });

    const triggerElement = document.querySelector('#infinite-scroll-trigger');
    if (triggerElement) {
      observer.current.observe(triggerElement);
    }

    return () => {
      if (triggerElement) {
        observer.current.unobserve(triggerElement);
      }
      observer.current.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="job-list">
      {items.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
      <div id="infinite-scroll-trigger" style={{ height: "20px" }} />
    </div>
  );
};

export default JobList;