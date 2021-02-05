export class CheckData {
  checkEmailFormat = (email: string) => {
    this.checkExistenceProperty(email, "email");
    if (!email.includes("@")) {
      throw new Error(
        "check the format of the 'email' property, @ is required"
      );
    }
  };

  checkExistenceProperty = (reqPropety: string, propretyName: string) => {
    if (!reqPropety || reqPropety === undefined) {
      throw new Error(`'${propretyName}' not found`);
    }
  };

  checkPasswordFormat = (password: string) => {
    this.checkExistenceProperty(password, "password");
    if (password.length < 6) {
      throw new Error(" is password required whith minimum 6 caracteres");
    }
  };
}
