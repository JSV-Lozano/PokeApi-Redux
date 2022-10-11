export const logger = (store) => (next) => (action) => {
  next(action);
};
export const feacturing = (store) => (next) => (actionInfo) => {
  console.log("🚀 ~ file: index.js ~ line 5 ~ feacturing ~ actionInfo", actionInfo)
  const feactured = [{ name: "Inosis" }, ...actionInfo.action.payload];
  const updatingFeactured = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: feactured },
  };
  next(updatingFeactured);
};
