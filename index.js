var recipes = new Object();

function updateObjetWithKeyAndValue(object, key, value) {
  return(Object.assign(object, {key: value}))
}