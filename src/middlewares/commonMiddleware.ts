import multer from "multer";

class CommonMiddleware {
  public FormData() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads");
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
      },
    });
    const upload = multer({ storage: storage });
    return upload.array("images[]");
  }
}

export const commonMiddleware = new CommonMiddleware();
