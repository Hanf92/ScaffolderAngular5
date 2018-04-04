export class UtilsService {

    constructor() { }

    public isBrowserLanguageIT(): boolean {
        return (window.navigator.language.includes('it') || window.navigator.language.includes('IT'))
    }
}