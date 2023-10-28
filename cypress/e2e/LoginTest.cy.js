import LoginPage from "../pages/LoginPage"

describe("Login Functionality",()=>{

    const loginPage=new LoginPage();

    it("Login with Invalid creds",()=>{

        loginPage.userLogin("Fahim","WrongPassword");
        loginPage.invalidAssertion();
    })

    it("Login with valid creds",()=>{

         loginPage.userLogin("John Doe","ThisIsNotAPassword");
         loginPage.validAssertion();

    })
})