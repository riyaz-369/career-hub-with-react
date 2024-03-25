import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);

    const handleNotify = () => {
        saveJobApplications(idInt);
        toast("Successfully applied");
    }

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">JOB details</h2>
                    <h2>Job details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side think</h2>
                    <button onClick={handleNotify} className="btn btn-primary">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;