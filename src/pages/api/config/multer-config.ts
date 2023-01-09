import type { Options } from "multer";
import multer from "multer";
import path from "path";
import crypto from "node:crypto";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { fileConfig } from "@src/utils/file/config-file";

export interface fileExtends extends Express.Multer.File {
  key: string;
  location: string;
}

const storageType = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "..", "/"));
    },
    filename: (req, file: fileExtends, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, "");
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new S3Client({
      credentials: {
        secretAccessKey: process.env.AWSS3_SECRET_ACCESS_KEY!,
        accessKeyId: process.env.AWSS3_ACCESS_KEY_ID!,
      },
      region: process.env.AWSS3_DEFAULT_REGION,
    }),
    bucket: process.env.AWSS3_BUCKET!,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, "");

        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
};

export const multerConfig: Options = {
  dest: path.join(__dirname, "..", "/"),
  storage: storageType.s3,
  limits: {
    fileSize: fileConfig.maxSize,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = fileConfig.types;

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};
