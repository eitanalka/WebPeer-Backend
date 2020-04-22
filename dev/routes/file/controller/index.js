import addFile from './addFile';
import deleteFile from './deleteFile';
import getFiles from './getFiles';

const fileController = {};

fileController.addFile = addFile;
fileController.deleteFile = deleteFile;
fileController.getFiles = getFiles;

export default fileController;
