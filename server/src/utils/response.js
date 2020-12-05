const response = (res, status, success, data, others) => res.status(status).json({ success, data, status, others });

export default response;
