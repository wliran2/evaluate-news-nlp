const checktheURL = require('../js/checktheURL');

test('check that the URL is Valid', () => {
    expect(checktheURL('https://www.bbc.com/sport/golf')).toBe("");
});

test('check that the URL is empty', () => {
    expect(checktheURL('')).toBe("the URL is empty - you have to Enter a Valid URL");
});

test('check that the URL is invalid', () => {
    expect(checktheURL('htt')).toBe("URL is not valid please enter a Valid URL");
});