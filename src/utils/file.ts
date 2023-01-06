import fs from "fs";

// eslint-disable-next-line consistent-return
export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
    // esta função verifica se existe um arquivo na url que a gente passar
  } catch (err) {
    return err;
  }
  await fs.promises.unlink(filename);
};
