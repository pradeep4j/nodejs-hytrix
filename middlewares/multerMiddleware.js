import multer from 'multer';
import path from 'path';
// import v4:uuidv4 from 'uuid';
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    const unique = uuidv4();
    cb(null, unique + path.extname(file.originalname))
  }
})


export const upload = multer({
  storage
})