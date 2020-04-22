const getFiles = async (req, res) => {
  const files = req.app.get('files');
  return res.status(200).json(Object.values(files));
};

export default getFiles;
