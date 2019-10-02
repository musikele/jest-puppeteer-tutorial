import toggleClass from './toggleClass';

describe('Toggle class on DOM element', () => {
    it('attach an element to the Document and toggle a clas on it', () => {
        //setup
        const div = document.createElement('div')
        div.id = 'myDiv'
        document.body.appendChild(div);
        // div actually attached to the virtual dom:
        const sameDivAsBefore = document.getElementById('myDiv');
        expect(div).toBe(sameDivAsBefore);

        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).toContain('myClass');

        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).not.toContain('myClass');
    })
});
