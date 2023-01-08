import { fileExtends } from "@src/pages/api/config/multer-config";
import { filesProps } from "@src/pages/home";
import axios, { AxiosError } from "axios";

interface AxiosErrorResponse {
  message: string;
}

interface UploadFileProps {
  files: filesProps[];
  setFilesList: (filesList: (newState: filesProps[]) => filesProps[]) => void;
}

export function UploadFile({ files, setFilesList }: UploadFileProps) {
  files.forEach(async (index) => {
    const formData = new FormData();
    formData.append("file", index);

    try {
      await axios.post<fileExtends>("/api/upload-file", formData);
      setFilesList((filesList) => [...filesList, index]);
    } catch (e) {
      const errorMessage = getFormatError(e);
      const findError = getErrors(errorMessage);

      index.error = findError;
      setFilesList((rest) => [...rest, index]);
    }
  });
}

function getFormatError(e: unknown): string {
  const { response } = e as AxiosError<AxiosErrorResponse>;
  const errorMessage = response?.data.message;

  if (errorMessage) return errorMessage;
  return "Internal error";
}

function getErrors(error: string): string {
  const InternalError = errosConfig[0].message;
  const findError = errosConfig.find((index) => index.error === error) || null;

  if (!findError) return InternalError;
  return findError.message;
}

const errosConfig = [
  {
    error: "Internal error",
    message: "Ocorreu um erro interno em nosso servidor.",
  },
  {
    error: "File too large",
    message: "O arquivo é muito grande, suportamos até 2MB.",
  },
  {
    error: "Invalid file type",
    message: "O arquivo não corresponde a nossa FORMATOS (JPEG, PNG e GIF).",
  },
];
