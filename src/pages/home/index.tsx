import Image from "next/image";
import UploadIcon from "@src/source/upload-icon.svg";
import { Container, Files, Main, Upload, UploadInput } from "./style.css";
import { useState } from "react";
import { UploadFile } from "@src/utils/upload-file";

export interface filesProps extends File {
  error: string;
  loading: boolean;
}

export default function Home() {
  const [onDrag, setOnDrag] = useState(false);
  const [filesList, setFilesList] = useState<filesProps[]>([]);

  function handleDrag() {
    setOnDrag(!onDrag);
  }

  async function handleFiles({ target }: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(target.files!) as filesProps[];
    UploadFile({ files, setFilesList });
    setOnDrag(false);

    target.value = "";
  }

  return (
    <Main>
      <Container>
        <h1>Upload de arquivos</h1>
        <Upload>
          <UploadInput>
            <input
              type="file"
              id="uploadFile"
              onChange={handleFiles}
              onDragEnterCapture={handleDrag}
              onDragLeaveCapture={handleDrag}
              multiple
            />
            <label htmlFor="uploadFile">
              <Image src={UploadIcon} alt="upload icon" />
              {!onDrag && (
                <>
                  <span>
                    Arraste e solte arquivos ou <strong>Clique aqui</strong>
                  </span>
                  <p>Supormatos os formatos: JPEG, PNG e GIF</p>
                </>
              )}
            </label>
          </UploadInput>
          <button disabled>FAZER UPLOAD DE ARQUIVOS</button>
        </Upload>
        <Files>
          {filesList.map((index, key) => (
            <div key={key}>
              <h1>{index.name}</h1>
              <span>{index.error}</span>
              <span>{index.loading && "Loading..."}</span>
            </div>
          ))}
        </Files>
      </Container>
    </Main>
  );
}
