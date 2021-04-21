const fetchItem = (appName) => {
  const oldItemString = localStorage.getItem(appName);

  return oldItemString !== undefined ? JSON.parse(oldItemString) : {};
};

const UserSettings = {};

UserSettings.loadBookToAssessment = (appName) => {
  const item = fetchItem(appName);

  return item && item.bookToAssessment
    ? Immutable(item.bookToAssessment)
    : Immutable({});
};

UserSettings.storeBookToAssessment = (appName, bookToAssessment) => {
  const oldItem = fetchItem(appName);
  const newItem = R.mergeRight(oldItem, { bookToAssessment });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

export default UserSettings;
