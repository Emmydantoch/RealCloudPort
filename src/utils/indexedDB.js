// IndexedDB utilities for image storage
export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ProjectDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      resolve(db);
    };
    request.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains('images')) {
        database.createObjectStore('images', { keyPath: 'id' });
      }
    };
  });
};

export const storeImage = (db, id, blob) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['images'], 'readwrite');
    const store = tx.objectStore('images');
    store.put({ id, blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

export const getImage = (db, id) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['images'], 'readonly');
    const store = tx.objectStore('images');
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result?.blob);
    request.onerror = () => reject(request.error);
  });
};

export const deleteImage = (db, id) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['images'], 'readwrite');
    const store = tx.objectStore('images');
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
