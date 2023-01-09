export const fileConfig = {
  maxSize: 2 * 1024 * 1024 /* 2MB */,
  errors: {
    "File too large": "O arquivo é muito grande, suportamos até 2MB.",
    "Invalid file type":
      "O arquivo não corresponde a nossa FORMATOS (JPEG, PNG e GIF).",
    "Internal error": "Ocorreu um erro interno em nosso servidor.",
  },
  types: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
};
