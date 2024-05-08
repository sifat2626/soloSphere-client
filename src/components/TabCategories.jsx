/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

function TabCategories() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h3 className="font-semibold text-2xl">Browse Jobs By Categories</h3>
          <p className="mt-6 max-w-3xl mx-auto mb-8">
            Three categories available for the time being. They are Web
            development, Graphics design and Digital marketing. Browse them by
            clicking the tabs below.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6">
            {jobs
              .filter((j) => j.category === "Graphic Design")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default TabCategories;
