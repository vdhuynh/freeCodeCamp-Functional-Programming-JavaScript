function urlSlug(title) {
  return title
    .toLowerCase()
    .split(" ")
    .filter(word => word !== "")
    .join("-");
}

const result = urlSlug("The Quick Brown Fox");
console.log(result);
