const checktheURL = require('../js/checktheURL');

test('check that the URL is Valid', () => {
    expect(checktheURL('https://www.bbc.com/sport/golf')).toBe("Running checkForName URL is Valid --  ");
});

test('check that if URL isnt a valid', () => {
    expect(checktheURL('htt')).toBe("URL is not valid please enter a Valid URL");
});