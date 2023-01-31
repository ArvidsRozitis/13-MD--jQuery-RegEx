import {validateName} from './validateName'

describe(validateName, () => {
    it('sould return false if empty', () => {
        const result = validateName('')
        console.log('result', result)
        
        expect(result).toEqual(false)
    })

    it('sould return false if more than 20 characters', () => {
        const result = validateName('ahsajsejsjahsjfldskjsajdnadfsadsa')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains digits', () => {
        const result = validateName('qwewqe1')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains sqmbolsv1', () => {
        const result = validateName('qwe#wqe1')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains sqmbolsv2', () => {
        const result = validateName('qwe@wqe1')
        console.log('result', result)

        expect(result).toEqual(false)
    })
    it('sould return false if contains sqmbolsv2', () => {
        const result = validateName(`qwe'wqe1`)
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains blankspace', () => {
        const result = validateName('qwewe ')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains blankspace in front', () => {
        const result = validateName(' qwewqe')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return false if contains blankspace in middle', () => {
        const result = validateName('qwew qe')
        console.log('result', result)

        expect(result).toEqual(false)
    })

    it('sould return true if contains more than 1 letter', () => {
        const result = validateName('qer')
        console.log('result', result)

        expect(result).toEqual(true)
    })

    it('sould return true if contains Latvian letters', () => {
        const result = validateName('Arvīds')
        console.log('result', result)

        expect(result).toEqual(true)
    })
})