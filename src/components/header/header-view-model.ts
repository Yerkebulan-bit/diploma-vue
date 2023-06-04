import {LocalStorageService} from "@/assets/services/local-storage-service";
import type {HeaderModel} from "@/components/header/header-model";

export class HeaderViewModel {
  model: any

  constructor(model: HeaderModel) {
    this.model = model
  }

  /**
   * Фиксация меню при скролле
   * @param {number} elementHeight - высота элемента
   */
  handleScroll(elementHeight: number): void {
    this.model.isFixed = window.scrollY > elementHeight
  }

  /**
   * Открытие/закрытие меню
   */
  toggleMenu(): void {
    this.model.isOpenMenu = !this.model.isOpenMenu
  }

  /**
   * Выход из аккаунта
   */
  logout(): void {
    this.model.isAuth = false
    LocalStorageService.removeItem('access_token')
    window.location.href = '/'
  }
}
