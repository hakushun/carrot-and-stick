import { NextApiRequest, NextApiResponse } from 'next';

const missions = async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<any> => {
	const data = req.body;
	try {
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
};

export default missions;
