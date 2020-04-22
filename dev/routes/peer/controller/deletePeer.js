const deletePeer = async (req, res) => {
  const { peerId } = req.body;

  if (!peerId) {
    return res.status(400).send('Must include peerId');
  }

  const peers = req.app.get('peers');
  const files = req.app.get('files');

  peers.deletePeer(peerId);
  files.deletePeerFiles(peerId);

  console.log(peers);
  console.log(files);

  return res.status(200).send('OK');
};

export default deletePeer;
