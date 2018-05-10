import { LoginPage } from './login.po';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should <app-login>', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
  });
  
  it('should have title', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
    expect(page.getTitle().getText()).toEqual("Login");
  });
  it('should login the page', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);

    var username= page.getInputUsername();
    expect(username.isPresent()).toEqual(true);
    username.sendKeys('demo');

    var password= page.getInputPassword();
    expect(password.isPresent()).toEqual(true);
    password.sendKeys('1234');

    var btnLogin= page.getBtnLogin();
    expect(btnLogin.isPresent()).toEqual(true);

    btnLogin.click().then(()=>{
        expect(page.getHome()).toBe(true);
    });
  });

  it('should show error message if the credentials are wrong', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);

    var username= page.getInputUsername();
    expect(username.isPresent()).toEqual(true);
    username.sendKeys('david');

    var password= page.getInputPassword();
    expect(password.isPresent()).toEqual(true);
    password.sendKeys('43534534');

    var btnLogin= page.getBtnLogin();
    expect(btnLogin.isPresent()).toEqual(true);

    btnLogin.click().then(()=>{
        var message= page.getErrorMessage();
        expect(message.isPresent()).toBe(true);
    });
  });

});
