export default class Peers {
  addPeer(peerId) {
    this[peerId] = true;
  }

  deletePeer(peerId) {
    this[peerId] = false;
  }
}
