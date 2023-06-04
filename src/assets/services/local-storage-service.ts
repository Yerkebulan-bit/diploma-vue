export class LocalStorageService {
  static getItem(key: string): string {
    return localStorage.getItem(key) || ''
  }

  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  static clear(): void {
    localStorage.clear()
  }

  static watchLocalStorage(callback: Function, context: any ): void {
    const handlerStorageChange = function (event: StorageEvent) {
      if (event.storageArea === localStorage) {
        callback.call(context, event.key, event.newValue)
      }
    }
    console.log('watchLocalStorage')
    window.addEventListener('storage', handlerStorageChange, false)

    window.addEventListener('beforeunload', () => {
      window.removeEventListener('storage', handlerStorageChange)
    })
  }
}
