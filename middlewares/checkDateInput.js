const checkDateInput = (req, res, next) => {    
  if (req.body.date) res.locals.date = new Date(req.body.date);
  if (!req.body.date) res.locals.date = new Date();
  next();
}

export default checkDateInput;