import { NextApiRequest, NextApiResponse } from "next";

export default (func: any) =>
  (req: NextApiRequest, res: NextApiResponse, next: () => void) =>
    Promise.resolve(func(req, res, next)).catch(next);
