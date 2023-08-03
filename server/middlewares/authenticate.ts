import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

// import { RequestHandler } from './../interfaces/RequestHandler';

/**
 * Middleware function to authenticate incoming requests using a JWT token.
 * If the token is present and valid, the function calls the next middleware in the chain.
 * If the token is missing or invalid, it sends an appropriate error response.
 *
 * @returns {Function} Express middleware function
 */
export const authenticate = (): RequestHandler => {
	return (req, res, next) => {
		if (req.headers['x-auth-token']) {
			const token = req.headers['x-auth-token'] as string;

			jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
				if (err) {
					console.log(err);
					return res.status(403).json({ message: 'Forbidden' });
				}

				// compare token
				next();
			});
		} else {
			res.status(401).json({ message: 'Unauthorized' });
		}
	};
};
