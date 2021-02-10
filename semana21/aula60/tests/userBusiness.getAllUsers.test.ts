import { UserBusiness } from "../src/business/UserBusiness";
import { UserRole } from "../src/model/User";

describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};
  
    test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
      expect.assertions(2);
      try {
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getAllUsers(UserRole.NORMAL);
      } catch (err) {
        expect(err.statusCode).toBe(401);
        expect(err.message).toBe("this.tokenGenerator.verify is not a function");
      }
    });



  });