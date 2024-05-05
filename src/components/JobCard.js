import React from 'react';
import weekdaylogo from '../assets/weekday-logo.jpg';

const capitalizeFirstWord = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
};

const JobCard = ({ job }) => {
    const postedDaysAgo = generateRandomNumber();

    return (
        <div className="job-card-main-container">
            <div className="posted-days-container">
                <div className="posted-days-inner-container">
                    <p className="posted-days-text">⏳ Posted {postedDaysAgo} days ago</p>
                </div>
            </div>


            <div className="main-meta-container">
                <div className="company-logo-info">
                    <img src={job.logoUrl ? job.logoUrl : weekdaylogo} alt={`${job.companyName} logo`} className="company-logo" />
                    <div className="company-meta-info">
                        <p className="company-name">{capitalizeFirstWord(job?.companyName) || "Weekday"}</p>
                        <p className="job-role">{capitalizeFirstWord(job?.jobRole)}</p>
                        <p className="job-location">{capitalizeFirstWord(job?.location)}</p>
                    </div>
                </div>
                <p className="job-salary">
                    Estimated Salary: ₹{job?.minJdSalary ? job.minJdSalary : '0'} - {job?.maxJdSalary} LPA
                    <span aria-label="Offered salary range"> ✅</span>
                </p>
                <div className="about-company-container">
                    <p className="about-company-text">About Company:</p>
                    <p className="job-details">{job?.jobDetailsFromCompany}</p>
                    <div className="job-shadow"></div>
                </div>
                <div className="minus-100">
                    <div className="job-link-container">
                        <button className="job-link">View job</button> 
                    </div>
                    <div className="minimum-experience">
                        <h3>Minimum Experience</h3>
                        <h2>{job?.minExp || "0"} years</h2>
                    </div>
                </div>
            </div>
            <div className="apply-button-container">
                <button
                    className="apply-button"
                    style={{ backgroundColor: 'rgb(85, 239, 196)', color: 'black' }}
                >
                    ⚡ Easy Apply
                </button>
                <button
                    className="unlock-referral-button"
                >
                    <div className="unlock-imgs-container">
                        <div className="unlock-img-container"><img alt="devsoni" src="https://media.licdn.com/dms/image/D5603AQF5hhe7c358lQ/profile-displayphoto-shrink_400_400/0/1714452444537?e=1720051200&v=beta&t=6XzCryxiYzuIgsI3F6m6WJKmY-YRIqUmS1RRmFdlg-c" className="unlock-img" /></div>
                        <div className="unlock-img-container"><img alt="devsoni" src="https://media.licdn.com/dms/image/D5603AQF5hhe7c358lQ/profile-displayphoto-shrink_400_400/0/1714452444537?e=1720051200&v=beta&t=6XzCryxiYzuIgsI3F6m6WJKmY-YRIqUmS1RRmFdlg-c" className="unlock-img" /></div>
                    </div>

                    Unlock referral asks
                </button>
            </div>
        </div>
    );
};

export default JobCard;