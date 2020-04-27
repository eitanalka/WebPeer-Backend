const addFile = async (req, res) => {
  const { peerId, fileName } = req.body;

  if (!peerId || !fileName) {
    return res.status(400).send('Must include peerId and file name');
  }

  if (typeof fileName !== 'string') {
    return res.status(400).send('File name must be string');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  if (!peers[peerId]) {
    return res.status(400).send('Bad peer id');
  }

  files.addFile(fileName, peerId);
  peers.notifyPeers();

  console.log(files);
  return res.status(200).send('OK');
};

export default addFile;
