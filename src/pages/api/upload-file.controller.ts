import catchAsyncErrors from "./middlewares/asyncErros";
import { NextApiRequest, NextApiResponse } from "next";
import { fileExtends } from "./config/multer-config";

export interface MulterRequest extends NextApiRequest {
  file: fileExtends;
}

export const uploadFile = catchAsyncErrors(
  async (req: MulterRequest, res: NextApiResponse) => {
    const file = req.file;
    res.send(file);
  }
);
