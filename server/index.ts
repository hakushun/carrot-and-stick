import express, { Request, Response } from 'express';
import next from 'next';
import helmet from 'helmet';

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
	server.use(express.json());
	server.use(helmet());

	server.get('/', (_req: Request, res: Response) => {
		return res.json({ success: true });
	});

	server.all('*', (req: Request, res: Response) => {
		return handle(req, res);
	});

	server.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(`Ready on http://localhost:${port}`);
	});
});
