const logRequests = (req, res, next) => {
  console.log(`method: ${req.method}, path: ${req.path}, body:`, req.body);
  next();
}

export default logRequests;