const deletePeer = async (req, res) => {
  const { peerId } = req.body;

  if (!peerId) {
    return res.status(400).send('Must include peerId');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  peers[peerId] = false;

  const keys = Object.keys(files);
  keys.forEach((file) => {
    if (files[file]) {
      files[file] = files[file].filter(peer => peer !== peerId);
    }
  });

  console.log(peers);
  console.log(files);

  return res.status(200).send('OK');
};

export default deletePeer;