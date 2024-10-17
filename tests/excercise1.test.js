describe('Excercise 1', function() {
    test('TestCase01', function(browser) {
        browser
        .url('https://glitchitsystem.com/monster/')
        .waitForElementVisible('body')
        .click('#username')
        .pause(1000)
        .click('#password')
        .pause(1000)
        .click("button[class='btn btn-success']")
        .pause(1000)
        .useXpath()
        .getText("(//p[@class='notValid'])[1]", function(result){
            console.log(result.value)
        })
        .getText("(//p[@class='notValid'])[2]", function(result){
            console.log(result.value)
        })
    })

    test('TestCase02', function(browser) {
        browser
        .useCss()
        .setValue('#username', 'absd@gmail.com')
        .setValue('#password', '123456y78')
        .click("button[class='btn btn-success']")
        .pause(2000)
        .getText("p[class=notValid]", function(result){
            console.log(result.value)
        })
    })
    
})