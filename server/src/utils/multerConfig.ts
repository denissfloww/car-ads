import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

const storageConfig = multer.diskStorage({
    destination: function (_req: Express.Request, _file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
        callback(null, './upload/');
    },
    filename: function (_req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
        callback(null, (Date.now().toString() + uuidv4()).replace(/(\s)|(=)/g, '')  ) ;
    }
});

export default storageConfig;