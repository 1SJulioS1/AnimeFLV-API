const { File } = require("megajs");

const downloadVideo = async (req, res) => {
  try {
    const fileUrl =
      "https://mega.nz/file/yagHlRKB#AKBvkABb-kiMnb02tMfQDgARiTcAOCIOjPB-MLTxO5s";
    const file = File.fromURL(fileUrl);
    await file.loadAttributes();

    // Configura los encabezados de la respuesta para soportar streaming
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("Content-Length", file.size);

    // Crea un stream para el archivo y lo envía como respuesta
    const downloadStream = file.download();
    downloadStream.pipe(res);
  } catch (error) {
    console.error("Error al descargar el archivo:", error);
    res.status(500).send("Error al descargar el archivo");
  }
};

module.exports = downloadVideo;
