const validatePassword = (password: string) => {
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/
//^ mustcontain
//(?=.*[0-9]) at least one
//(?=.*[!@#$%^&*]) at least one
//[a-zA-Z0-9!@#$%^&*] can contain only these
//{8,} eight or more   {8} eight  {8,20} from eight to 20 
//$/ close
    if(validPassword.test(password)) {
        return true   
    } else {
        return false
    }
}

export {validatePassword}