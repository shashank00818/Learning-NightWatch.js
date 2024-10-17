describe('Testing for getText', function() {
    test('getText test', function(browser) {
        browser
        .url('https://www.browserstack.com/home')
        .waitForElementVisible('body')
        .getText("a[aria-label='Pricing']", function(result) {
            console.log('Value is: ' + result.value)
        })
    })
})


// To set or pass a text: setValue('selector', value)
// for wait: pause(5000)
// to get Text of set text or values OF TEXT FIELDS: getValue -- syntax same as getText
// to clear the value: clearValue('selector')
// To click: click('selector)
//To skip a test: 
// 1. test.skip
// 2. xtest
//To run only a particular test
// 1. test.only

// We can do above on file level also. describe.skip or describe.only


// To run a test from terminal: npx nightwatch --test src_folder_name/file_name
//  Example: npx nightwatch --test tests/sampleElements.test.js

// To run only a particular test from a file
// npx nightwatch --test tests/sample.test.js --testcase "Test_Case_name"

// To group
// Here group means different folder inside main test folder
// npx nightwatch --group tests/examples

// Similar to selenium groups here we have tags
// above test line add this.tags = ['group_name']
// to run: npx nightwatch --tag group_name

// Navigating back: .back()
// Navigating forward: .forward()
// To refresh: .refresh()

// getting page title:  .title(function(title) {
        // console.log(title.value)})
// 2nd way is to use .getTitle() --- suntax similar to .title (Better to use because it return string)

//Handling alerts:
// .getAlertText( callback function)
// .dismissAlert()
// .acceptAlert()

//Assertion and verify:
// .assert - Similar to hard assert
// .verify - similar to soft assert
// asset.visible('selector') --- can also use verify
// asset.not.visible('selector')  --- can also use verify
// assert.containsText('selector', 'text to check') --- can also use verify
// assert.valueContains('selector', 'text to check')
// assert.value('selector', 'text to check')
// assert.title('title to check')
// assert.urlContains('url')
// assert.urlEquals('url')
// assert.attributeContains('selector', 'attribute', 'value')