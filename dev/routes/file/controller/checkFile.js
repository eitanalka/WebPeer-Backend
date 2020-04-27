import hasha from 'hasha';

const addFile = async (req, res) => {
  const { fileName, file } = req.body;

  if (!fileName || !file) {
    return res.status(400).send('Must include file name and file data');
  }

  if (typeof fileName !== 'string') {
    return res.status(400).send('File name must be string');
  }

  const files = req.app.get('files');

  const hash = hasha(file);
  if (files[fileName] && files[fileName].hash !== hash) {
    return res.status(400).send('A different file with the same file name already exists');
  }

  return res.status(200).send('OK');
};

export default addFile;
