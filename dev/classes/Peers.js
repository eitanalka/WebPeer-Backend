export default class Peers {
  addPeer(peerId, socket) {
    this[peerId] = socket;
  }

  deletePeer(peerId) {
    delete this[peerId];
  }

  notifyPeers() {
    const keys = Object.keys(this);
    keys.forEach((peerId) => {
      this[peerId].emit('updatefiles');
    });
  }
}
