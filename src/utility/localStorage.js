const getStoredLocalStorage = () => {
  const storedJobApplication = localStorage.getItem('job-applications');
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplications = (id) => {
  const storedJobApplication = getStoredLocalStorage();
  const exists = storedJobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplication.push(id);
    localStorage.setItem(
      'job-applications',
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredLocalStorage, saveJobApplications };
