import nextConnect from "next-connect";
import onError from "@src/pages/api/middlewares/errors";
import multer from "multer";
import { uploadFile } from "./upload-file.controller";
import { multerConfig } from "./config/multer-config";

const handler = nextConnect({ onError }).use(
  multer(multerConfig).single("file")
);

handler.post(uploadFile);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
