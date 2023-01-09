import React from "react";
import { CircleNotch } from "phosphor-react";
import { Container, Main, Upload } from "./style.css";
import { UploadFile } from "@src/utils/file/upload-file";
import { fileExtends } from "../api/config/multer-config";
import { UploadInputs } from "./components/Upload/inputs";
import { AwaitFiles } from "./components/Upload/awaitFiles";
import { ReadyFiles } from "./components/Upload/readyFiles";

export interface filesProps extends File {
  status: "await" | "uploading" | "uploaded";
  error: string;
  loading: boolean;
  infos: fileExtends;
}

export interface handleDeleteFileProps {
  file: filesProps;
}

export default function Home() {
  const [filesList, setFilesList] = React.useState<filesProps[]>([]);
  const [loading, setLoading] = React.useState(false);
  async function handleUpdateFile() {
    setLoading(true);
    await UploadFile({ awaitFiles, filesList, setFilesList });
    setLoading(false);
  }

  const existError = filesList.find((index) => index.error) || false;
  const awaitFiles =
    filesList.filter(({ status }) => status === "await") || null;

  return (
    <Main>
      <Container>
        <h1>Upload de arquivos</h1>
        <Upload>
          <UploadInputs setFilesList={setFilesList} />
          <AwaitFiles
            awaitFiles={awaitFiles}
            filesList={filesList}
            setFilesList={setFilesList}
          />
          <ReadyFiles filesList={filesList} />
          <button
            disabled={!awaitFiles.length || !!existError || loading}
            onClick={handleUpdateFile}
          >
            {loading ? (
              <CircleNotch size={18} className="loading-circle" />
            ) : (
              "FAZER UPLOAD DE ARQUIVOS"
            )}
          </button>
        </Upload>
      </Container>
    </Main>
  );
}
