import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const key = process.env.JWT_SECRET_KEY!;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Access token is missing or invalid" });
  }

  try {
    jwt.verify(token, key);
    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
};
