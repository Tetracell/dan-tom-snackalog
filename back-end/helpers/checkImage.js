const imgCheck = (img) => {
  if (!img) {
    return "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  } else {
    return img;
  }
};

module.exports = imgCheck;
