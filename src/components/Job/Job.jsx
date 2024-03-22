import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="mt-4 flex gap-4">
                    <button className="btn btn-outline">{remote_or_onsite}</button>
                    <button className="btn btn-outline">{job_type}</button>
                </div>
                <div className="my-4 flex gap-6">
                    <h2 className="flex gap-2"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</h2>
                    <h2 className="flex gap-2"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;