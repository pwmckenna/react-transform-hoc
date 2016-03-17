export default ({ imports }) => Component => {
  let ret = Component;
  for (let i = imports.length - 1; i >= 0; --i) {
    ret = imports[i](ret);
  }
  return ret;
};