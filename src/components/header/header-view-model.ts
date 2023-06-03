export class HeaderViewModel {
  model: any

  constructor(model: any) {
    this.model = model
  }

  handleScroll(elementHeight: number): void {
    this.model.isFixed = window.scrollY > elementHeight
  }

  toggleMenu(): void {
    this.model.isOpenMenu = !this.model.isOpenMenu
  }

  logout(): void {
    this.model.isAuth = false
    localStorage.removeItem('access_token')
    window.location.href = '/'
  }
}
