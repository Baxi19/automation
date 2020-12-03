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

    it('Nombre de usuario requerido', async function () {
      browser.sleep(800);
      element(by.name("login")).click().then(function () {
        browser.sleep(300);
        expect(element(by.xpath('//*[@id="wrapper"]/ul/li/div/strong')).getText()).toEqual("Error:");
      });
    });
  

  }); 
