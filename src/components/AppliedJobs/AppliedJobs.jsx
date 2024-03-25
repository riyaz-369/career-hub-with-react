import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredLocalStorage } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [AppliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredLocalStorage();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {AppliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;