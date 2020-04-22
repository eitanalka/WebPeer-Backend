export default class Files {
  addFile(file, peerId) {
    if (this[file] && !this[file].peers.find(peer => peer === peerId)) {
      this[file].fileName = file;
      this[file].peers.push(peerId);
    } else {
      this[file] = {};
      this[file].fileName = file;
      this[file].peers = [peerId];
    }
  }

  deleteFile(file, peerId) {
    if (this[file]) {
      this[file].peers = this[file].peers.filter(peer => peer !== peerId);
    }
  }

  deletePeerFiles(peerId) {
    const keys = Object.keys(this);
    keys.forEach((file) => {
      this.deleteFile(file, peerId);
    });
  }
}
