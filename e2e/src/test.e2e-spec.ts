import { browser, by, element } from 'protractor';

describe('Login', () => {
  beforeEach(async () => {
    // if are not developed in Angular, ahould be false
    await browser.waitForAngularEnabled(false);
    await browser.get('https://sentobox.com/mi-cuenta/');
  });

  afterEach(() => {
    browser.restart();
  });

  it('Nombre de usuario requerido', async () => {
    browser.sleep(800);
    element(by.name('login')).click().then(() => {
      browser.sleep(300);
      expect(element(by.xpath('//*[@id="wrapper"]/ul/li/div/strong')).getText()).toEqual('Error:');
    });
  });

  it('Contraseña requerida', async () => {
    browser.sleep(500);
    element(by.id('username')).sendKeys('marlentrevi@gmail.com');
    element(by.name('login')).click().then(() => {
      browser.sleep(200);
      expect(element(by.xpath('//*[@id="wrapper"]/ul/li/div/strong')).getText()).toEqual('Error');
    });
  });

  it('Contraseña inválida', async () => {
    browser.sleep(500);
    element(by.id('username')).sendKeys('marlentrevi@gmail.com');
    element(by.id('password')).sendKeys('12345');
    element(by.name('login')).click().then(() => {
      browser.sleep(400);
      expect(element(by.xpath('//*[@id="wrapper"]/ul/li[1]/div/strong[1]')).getText()).toEqual('Error');
    });
  });
}); 
