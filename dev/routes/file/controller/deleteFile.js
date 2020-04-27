const deleteFile = async (req, res) => {
  const { peerId, file } = req.body;

  if (!peerId || !file) {
    return res.status(400).send('Must include peerId');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  if (!peers[peerId]) {
    return res.status(400).send('Bad peer id');
  }

  files.deleteFile(file, peerId);
  peers.notifyPeers();

  console.log(files);

  return res.status(200).send('OK');
};

export default deleteFile;
