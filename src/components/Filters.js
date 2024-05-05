import React, { useState } from 'react';
import Select from 'react-select';

const Filters = () => {
  const [companyName, setCompanyName] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputChange = (e) => {
    setCompanyName(e.target.value);
    console.log('Input Changed:', e.target.name, e.target.value);
  };

  const rolesOptions = [
    {
      label: "ENGINEERING",
      options: [
        { value: "Backend", label: "Backend" },
        { value: "Frontend", label: "Frontend" },
        { value: "Fullstack", label: "Fullstack" },
        { value: "IOS", label: "IOS" },
        { value: "Flutter", label: "Flutter" },
        { value: "React Native", label: "React Native" },
        { value: "Android", label: "Android" },
        { value: "Tech Lead", label: "Tech Lead" },
        { value: "Dev-Ops", label: "Dev-Ops" },
        { value: "Data Engineer", label: "Data Engineer" },
        { value: "Data Science", label: "Data Science" },
        { value: "Computer-Vision", label: "Computer-Vision" },
        { value: "Nlp", label: "Nlp" },
        { value: "Deep-Learning", label: "Deep-Learning" },
        { value: "Test / Qa", label: "Test / QA" },
        { value: "Web3", label: "Web3" },
        { value: "Sre", label: "SRE" },
        { value: "Data-Infrastructure", label: "Data-Infrastructure" }
      ]
    },
    {
      label: "DESIGN",
      options: [
        { value: "Designer", label: "Designer" },
        { value: "Design Manager", label: "Design Manager" },
        { value: "Graphic Designer", label: "Graphic Designer" },
        { value: "Product Designer", label: "Product Designer" }
      ]
    },
    {
      label: "PRODUCT",
      options: [
        { value: "Product Manager", label: "Product Manager" }
      ]
    },
    {
      label: "OPERATIONS",
      options: [
        { value: "Operations Manager", label: "Operations Manager" },
        { value: "Founder's Office/Chief Of Staff", label: "Founder's Office/Chief of Staff" }
      ]
    },
    {
      label: "SALES",
      options: [
        { value: "Sales Development Representative", label: "Sales Development Representative" },
        { value: "Account Executive", label: "Account Executive" },
        { value: "Account Manager", label: "Account Manager" }
      ]
    },
    {
      label: "MARKETING",
      options: [
        { value: "Digital Marketing Manager", label: "Digital Marketing Manager" },
        { value: "Growth Hacker", label: "Growth Hacker" },
        { value: "Marketing", label: "Marketing" },
        { value: "Product Marketing Manager", label: "Product Marketing Manager" }
      ]
    },
    {
      label: "OTHER ENGINEERING",
      options: [
        { value: "Hardware", label: "Hardware" },
        { value: "Mechanical", label: "Mechanical" },
        { value: "Systems", label: "Systems" }
      ]
    },
    {
      label: "BUSINESS ANALYST",
      options: [
        { value: "Business Analyst", label: "Business Analyst" }
      ]
    },
    {
      label: "DATA ANALYST",
      options: [
        { value: "Data Analyst", label: "Data Analyst" }
      ]
    },
    {
      label: "PROJECT MANAGER",
      options: [
        { value: "Project Manager", label: "Project Manager" }
      ]
    },
    {
      label: "MANAGEMENT",
      options: [
        { value: "Management", label: "Management" }
      ]
    },
    {
      label: "LEGAL",
      options: [
        { value: "Legal", label: "Legal" }
      ]
    },
    {
      label: "HR",
      options: [
        { value: "Hr", label: "HR" }
      ]
    },
    {
      label: "FINANCE",
      options: [
        { value: "Finance", label: "Finance" }
      ]
    }
  ];

  const employeeOptions = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "500+", label: "500+" }
  ];

  const experienceOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" }
  ];

  const remoteOptions = [
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "In-office", label: "In-office" }
  ];

  const salaryOptions = [
    { value: "0L", label: "0L" },
    { value: "10L", label: "10L" },
    { value: "20L", label: "20L" },
    { value: "30L", label: "30L" },
    { value: "40L", label: "40L" },
    { value: "50L", label: "50L" },
    { value: "60L", label: "60L" },
    { value: "70L", label: "70L" }
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: 150
    })
  };

  const onFocus = (name) => {
    console.log("Focus", name);
    setFocusedInput(name);
  };

  const onBlur = (name) => {
    console.log("Blur", name);
    setFocusedInput(null);
  };

  return (
    <div className="filter-container">
      <div className="input-container">
        <p className={`upper-text ${focusedInput === 'roles' ? 'visible' : ''}`}>
          Roles
        </p>
        <Select
          isMulti
          name="roles"
          options={rolesOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Roles"
          styles={customStyles}
          onFocus={() => onFocus('roles')}
          onBlur={() => onBlur('roles')}
        />
      </div>
      <div className="input-container">
        <p className={`upper-text ${focusedInput === 'noofemployees' ? 'visible' : ''}`}>
          Number Of Employees
        </p>
        <Select
          isMulti
          name="noofemployees"
          options={employeeOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Number Of Employees"
          onFocus={() => onFocus('noofemployees')}
          onBlur={() => onBlur('noofemployees')}
        />
      </div>
      <div className="input-container">
        <p className={`upper-text ${focusedInput === 'experience' ? 'visible' : ''}`}>
          Experience
        </p>
        <Select
          isClearable
          name="experience"
          options={experienceOptions}
          className="basic-single-select"
          classNamePrefix="select"
          placeholder="Experience"
          onFocus={() => onFocus('experience')}
          onBlur={() => onBlur('experience')}
        />
      </div>
      <div className="input-container">
        <p className={`upper-text ${focusedInput === 'remote' ? 'visible' : ''}`}>
          Remote
        </p>
        <Select
          isMulti
          name="remote"
          options={remoteOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Remote"
          onFocus={() => onFocus('remote')}
          onBlur={() => onBlur('remote')}
        />
      </div>
      <div className="input-container">
        <p className={`upper-text ${focusedInput === 'minbasepaysalary' ? 'visible' : ''}`}>
          Minimum Base Pay Salary
        </p>
        <Select
          isClearable
          name="minbasepaysalary"
          options={salaryOptions}
          className="basic-single-select"
          classNamePrefix="select"
          placeholder="Minimum Base Pay Salary"
          onFocus={() => onFocus('minbasepaysalary')}
          onBlur={() => onBlur('minbasepaysalary')}
        />
      </div>
      <div className="search-company-name-container">
        <p className={`upper-text ${focusedInput === 'searchcompanyname' ? 'visible' : ''}`}>
          Search Company Name
        </p>
        <input
          aria-invalid="false"
          id="searchcompanyname"
          name="searchcompanyname"
          placeholder="Search Company Name"
          type="text"
          className="search-company-name"
          value={companyName}
          onChange={handleInputChange}
          onFocus={() => onFocus('searchcompanyname')}
          onBlur={() => onBlur('searchcompanyname')}
        />
      </div>
    </div>
  );
};

export default Filters;