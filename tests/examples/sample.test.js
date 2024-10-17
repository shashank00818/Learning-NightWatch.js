module.exports = {
    "My test" : function(browser){
        browser
        .url("https://www.cricbuzz.com/")
        .waitForElementVisible('body')
        .assert.titleContains("Cricbuzz.com")
        .end();
    }
}
