import { Router } from 'express';
import user from './user';

// Inject dependencies
export default () => {
	const app = Router();
	user(app);

	return app
}