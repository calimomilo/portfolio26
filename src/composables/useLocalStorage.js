export const getLocalStorage = (key, init) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, init)
  }

  return localStorage.getItem(key)
}

export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, item)
  return localStorage.getItem(key)
}

export const getSessionStorage = (key, init) => {
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, init)
  }

  return sessionStorage.getItem(key)
}

export const setSessionStorage = (key, item) => {
  sessionStorage.setItem(key, item)
  return sessionStorage.getItem(key)
}
