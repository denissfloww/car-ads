import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: function (_req: Express.Request, _file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
        callback(null, './upload/');
    },
    filename: function (_req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
        callback(null, Date.now().toString() + file.originalname  ) ;
    }
});

export default storageConfig;