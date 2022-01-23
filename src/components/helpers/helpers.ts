import { v4 as uuidv4 } from "uuid";

const ID_KEY = "#form.anonym.id";

export const createUniqueId = (): void => {
  const existingId = getUniqueId();
  if (existingId) return;

  const storage = window?.localStorage;
  if (storage) {
    storage.setItem(ID_KEY, uuidv4());
  } else {
    console.log("No storage available, failed to create");
  }
};

export const getUniqueId = (): string | null => {
  const storage = window?.localStorage;
  if (storage) {
    return storage.getItem(ID_KEY);
  } else {
    console.log("No storage available");
    return null;
  }
};
