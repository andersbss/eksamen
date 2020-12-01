const response = (res, status, success, data, others) => res.status(status).json({ success, data, others });

export default response;
