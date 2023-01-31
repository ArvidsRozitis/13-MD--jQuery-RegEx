const validateName = (name:string) => {
    const validWord =/^[\p{L}\p{M}]{2,20}$/u
    if(validWord.test(name)) {
        return true   
    } else {
        return false
    }
}

export {validateName}