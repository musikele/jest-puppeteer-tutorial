describe('TodoApp MVC tests', () => {
    beforeEach(async () => {
        await page.goto('http://todomvc.com/examples/vue/')
    })

    it('should add a todo', async () => {
        await page.type('input.new-todo', 'this is a todo');
        await page.keyboard.press('Enter');
        const label = await page.$('div.view label')

        const property = await label.getProperty('innerHTML')
        const jsonValue = await property.jsonValue()
        console.log(jsonValue)
        expect(jsonValue).toBe('this is a todo')
        //or: expect(page).toMatch('this is a todo')

        await page.hover('div.view label')
        await page.click('div.view button.destroy')
        const label2 = await page.$('div.view label')
        expect(label2).toBe(null)
    })
});
