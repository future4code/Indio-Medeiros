export class CustomError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class CheckData {
  checkEmailFormat = (email: string) => {
    this.checkExistenceProperty(email, "email");
    if (!email.includes("@")) {
      throw new CustomError(
        406,
        "check the format of the 'email' property, @ is required"
      );
    }
  };

  checkExistenceProperty = (reqPropety: any, propretyName: string) => {
    if (!reqPropety || reqPropety === undefined) {
      throw new CustomError(406, `'${propretyName}' not found`);
    }
  };

  checkPasswordFormat = (password: string) => {
    this.checkExistenceProperty(password, "password");
    if (password.length < 6) {
      throw new CustomError(
        406,
        " is password required whith minimum 6 caracteres"
      );
    }
  };

  checkRole = (role: string) => {
    this.checkExistenceProperty(role, "type");
    if (role === "normal" || role === "event") {
    } else {
      throw new CustomError(
        406,
        " user options for property type : 'normal' or 'event' "
      );
    }
  };
}
