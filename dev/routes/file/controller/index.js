import addFile from './addFile';
import deleteFile from './deleteFile';
import getFiles from './getFiles';
import checkFile from './checkFile';

const fileController = {};

fileController.addFile = addFile;
fileController.deleteFile = deleteFile;
fileController.getFiles = getFiles;
fileController.checkFile = checkFile;

export default fileController;
