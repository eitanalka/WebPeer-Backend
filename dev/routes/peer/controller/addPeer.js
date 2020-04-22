const addPeer = async (req, res) => {
  const { peerId } = req.body;

  if (!peerId) {
    return res.status(400).send('Must include peerId');
  }

  const peers = req.app.get('peers');
  peers.addPeer(peerId);
  console.log(peers);
  return res.status(200).send('OK');
};

export default addPeer;
