import jwt from 'jsonwebtoken';
import 'dotenv/config'; // import and invoke

const JWT_SECRET = process.env.JWT_SECRET;

function checkJWT(req, res, next) {

   const header = req.headers?.authorization;
   const token = header.split(' ')[1];

   if (!token) {
      return res.status(400).json({ message: 'Token must be provided' })
   };

   try {
      const verifyToken = jwt.verify(token, JWT_SECRET);
      console.log(verifyToken);
      next();
   }
   catch (err) {
      res.status(401).json({ message: 'Invalid token' })
   }
}

export default checkJWT;