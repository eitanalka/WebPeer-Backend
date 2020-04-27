import hasha from 'hasha';

const addFile = async (req, res) => {
  const { peerId, fileName, file } = req.body;

  if (!peerId || !fileName || !file) {
    return res.status(400).send('Must include peerId, file name, and file data');
  }

  if (typeof fileName !== 'string') {
    return res.status(400).send('File name must be string');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  if (!peers[peerId]) {
    return res.status(400).send('Bad peer id');
  }

  const hash = hasha(file);
  if (files[fileName] && files[fileName].hash !== hash) {
    return res.status(400).send('A differnt file with the same file name already exists');
  }

  files.addFile(fileName, peerId, hash);
  peers.notifyPeers();

  console.log(files);
  return res.status(200).send('OK');
};

export default addFile;
