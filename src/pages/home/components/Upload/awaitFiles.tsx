import * as FilePreview from "../FilePreview";
import { XCircle } from "phosphor-react";
import { File, Files, FilesTitle } from "../../style.css";
import { deleteFile } from "@src/utils/file/delete-file";
import { filesProps, handleDeleteFileProps } from "../..";
import { UploadFileProps } from "@src/utils/file/upload-file";

export interface awaitFilesProps {
  awaitFiles: filesProps[];
  filesList: filesProps[];
  setFilesList: UploadFileProps["setFilesList"];
}

export function AwaitFiles({
  awaitFiles,
  filesList,
  setFilesList,
}: awaitFilesProps) {
  function handleDeleteFile({ file }: handleDeleteFileProps) {
    deleteFile({ file, allFiles: filesList, setFilesList });
  }

  return (
    <>
      {awaitFiles && awaitFiles.length > 0 && (
        <>
          <FilesTitle>Preparados</FilesTitle>
          <Files>
            {awaitFiles.map((index, key) => (
              <File key={key}>
                <FilePreview.Root file={index}>
                  <FilePreview.Button>
                    <XCircle
                      size={16}
                      weight="fill"
                      onClick={() => handleDeleteFile({ file: index })}
                    />
                  </FilePreview.Button>
                </FilePreview.Root>
                <span>{index.error}</span>
              </File>
            ))}
          </Files>
        </>
      )}
    </>
  );
}
