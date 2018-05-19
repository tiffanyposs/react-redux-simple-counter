const Repeat = (props) => {
  var items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return items;
}

export default Repeat
