const checkName = (name) => {
  name = name.toLowerCase();
  console.log("Lowercase name: " + name);
  let nameArr = name.split(" ");
  console.log("Name in array: " + nameArr);
  return nameArr
    .map((word) => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
};

module.exports = checkName;
