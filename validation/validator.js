const validationCheck = ({firstname, lastname, username, password}, res) => {
    if (!firstname.trim() || !lastname.trim() || !username.trim() || !password.trim()) 
      return {
          error: true, 
          message: "all fields are required and must be filled up before proceeding"
        }
    if (firstname.length < 4 || lastname < 4 || username < 4 || password < 4) {
        return {
          error: true, 
          message: "individual fields must not have characters less than 4"
        }
    }
    return {
        error:false
    }

}

module.exports = {
    validationCheck
}