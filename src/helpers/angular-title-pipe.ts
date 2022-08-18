export const angularTitlePipe= (stringVictima: string):string  => {
    let firstChar = stringVictima[0]
    firstChar = firstChar.toUpperCase()

    return `${firstChar}${stringVictima.substring(1)}`
}