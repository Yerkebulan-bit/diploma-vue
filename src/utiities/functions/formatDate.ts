export function formatDate(inputDate: string){
    const date = new Date(inputDate)
    return date.toLocaleDateString('ru-RU', {day: "numeric", month: "long"})
}

export function formatDateWithYear(inputDate: string){
    const date = new Date(inputDate)
    return date.toLocaleDateString('ru-RU', {day: "numeric", month: "long", year: "numeric"})
}