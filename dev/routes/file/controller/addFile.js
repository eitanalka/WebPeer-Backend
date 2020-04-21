const addFile = async (req, res) => {
  const { peerId, file } = req.body;

  if (!peerId || !file) {
    return res.status(400).send('Must include peerId and file name');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  if (!peers[peerId]) {
    return res.status(400).send('Bad peer id');
  }

  if (files[file] && !files[file].find(peer => peer === peerId)) {
    files[file].push(peerId);
  } else {
    files[file] = [peerId];
  }

  console.log(files);
  return res.status(200).send('OK');
};

export default addFile;