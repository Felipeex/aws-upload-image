import React from "react";
import Image from "next/image";
import { filesProps } from "../..";
import { UploadInput } from "../../style.css";
import UploadIcon from "@src/source/upload-icon.svg";
import { previewFile, previewFileProps } from "@src/utils/file/preview-file";

interface uploadInputsProps {
  setFilesList: previewFileProps["setFilesList"];
}

export function UploadInputs({ setFilesList }: uploadInputsProps) {
  const [onDrag, setOnDrag] = React.useState(false);

  function handleDrag() {
    setOnDrag(!onDrag);
  }

  function handleFiles({ target }: React.ChangeEvent<HTMLInputElement>) {
    const allFiles = Array.from(target.files!) as filesProps[];
    previewFile({ allFiles, setFilesList });
    setOnDrag(false);

    target.value = "";
  }

  return (
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
  );
}
