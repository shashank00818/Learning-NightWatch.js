describe('BDD Sample test', function() {

    before(function(browser) {
        console.log('Before ran')
    })

    after(function(browser) {
        console.log('After ran')
    })

    beforeEach(function(browser) {
        console.log('Before each ran')
    })

    afterEach(function(browser) {
        console.log('After each ran')
    })

    test('Open Website', function(browser) {
        browser
        .url("https://www.cricbuzz.com/")
        .waitForElementVisible('body')
        .assert.titleContains("Cricbuzz.com")
        .end();
    })
})