import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};

// O diskStorage serve para renomear o arquivo que está sendo recebido e também setar o destino dele
// __dirname serve pra pegar o nome do diretório, assim depos podendo voltar uma pasta com o .. e depois colocar o nome da pasta
