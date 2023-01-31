import { validatePassword } from './validatePassword'

describe(validatePassword, () => {
    it('sould return false if empty', () => {
        const result = validatePassword('')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return false shorter than 8', () => {
        const result = validatePassword('A123!gh')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return false if there is no special char', () => {
        const result = validatePassword('Arvids123hejo')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return false if there is no letter char', () => {
        const result = validatePassword('123@#12340$')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return false if there is blank space', () => {
        const result = validatePassword('1234@asdf ')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return true if there is 8 or more chars, one special and one number at least', () => {
        const result = validatePassword('1234@asdfkhjhwe')
        console.log('result', result)
        
        expect(result).toEqual(true)
    })
})