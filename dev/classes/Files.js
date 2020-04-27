export default class Files {
  addFile(file, peerId, hash) {
    // Does not allow duplicate peers in the peers array
    if (this[file] && !this[file].peers.find(peer => peer === peerId) && this[file].hash === hash) {
      this[file].fileName = file;
      this[file].peers.push(peerId);
    }

    if (!this[file]) {
      this[file] = {};
      this[file].fileName = file;
      this[file].peers = [peerId];
      this[file].hash = hash;
    }
  }

  deleteFile(file, peerId) {
    if (this[file]) {
      this[file].peers = this[file].peers.filter(peer => peer !== peerId);

      if (this[file].peers.length === 0) {
        delete this[file];
      }
    }
  }

  deletePeerFiles(peerId) {
    const keys = Object.keys(this);
    keys.forEach((file) => {
      this.deleteFile(file, peerId);
    });
  }
}
