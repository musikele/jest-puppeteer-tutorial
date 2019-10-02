describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://michelenasti.com')
    })
  
    it('should display "google" text on page', async () => {
      await expect(page).toMatch('Michele Nasti')
    })
  })
