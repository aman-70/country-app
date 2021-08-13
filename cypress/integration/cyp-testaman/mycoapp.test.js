/// <reference types="cypress" />

describe('Start testing', () => {
    
    beforeEach('Basic functionalities', ()=>{
        cy.visit('http://localhost:3000/')
        cy.viewport(1280,720)
        //desktop view
    })

    it(' Pre log: Website loaded correctly' , () => {
        cy.log('Setup and website is loaded')
        cy.url().should('include', 'localhost:3000')
    })

    it('Loading followed by the card', () => {
        cy.get('[data-testid = loading]').should('exist')
        cy.get('[data-testid = card]').should('exist')
        cy.get('[data-testid = loading').should('not.exist') 
        //loading do not remains.
        //cy.debug() pause the js thread
    })
    
    it('Contains the heading', ()=>{
        //cy.contains('Where in the world?').should('exist')
        cy.get('[data-testid = nav-head]').should('exist')
    })

    it('Light and Dark mode works',() =>{
        //cy.contains('Dark').should('exist')
        cy.get('[data-testid = dark-mode]').should('have.text','Dark').click() //have the light mode on and clicked
        cy.get('[data-testid = dark-mode]').should('have.class','clicked') // class included clicked: dark mode on
        // doubt
    })

    it('Cards and its contents are loaded correctly', ()=> {
        cy.get('[data-testid = card').should('exist')
        cy.get('[data-testid = card-image').should('exist') //card have the flag image
        cy.get('[data-testid = card-body').should('exist') // card have the body 
        cy.get('[data-testid = card-text').should('exist') // have the info
    })

    it('Card and the new cardinfo page is working fine', () => {
        cy.get('[data-testid = card]').should('exist')
        cy.contains('Afghanistan').click()  //card is working
        cy.get('[data-testid = loading').should('have.text','Country details loading...') // inter page loding correctly
        cy.url().should('include','/details/AFG').then(value => {
            cy.log('The current url is : ',value)  //new url checked and logged
        })
        cy.get('[data-testid = loading').should('not.exist') //no loading war shown
        cy.get('[data-testid = nav-head]').should('exist') //main heading exists is new url as well
        cy.get('[data-testid = country-flag]').should('exist') // new page content under country flag is there
        cy.get('[data-testid = back-btn]').should('exist').click() //Back button is working correctly
        cy.url().should('include','localhost:3000').then(value => {
            cy.log('The current url is: ',value)
        })  //Back buttons return to the main page successfully
        
    })

    it('Inside the card is working fine as well', ()=> {
        cy.get('[data-testid = card]').should('exist')
        cy.contains('Afghanistan').click()
        cy.get('[data-testid = country-flag]').should('exist') //contains the country falg
        cy.get('[data-testid = country-name]').should('exist') //contains the country info 
        cy.contains('Border countries').should('exist')  // could use a data-testid for the whole section::have to make a change in code
        cy.get('[data-testid = border-country]').first().then(()=> {
            cy.contains('China').click()
        }) // have the border countries inside it
        cy.url().should('include','/details/CHN')  // border country tags are working fine and new url is loaded
        
    })

    it('Search bar is working fine', ()=>{
        cy.get('[data-testid = card]').should('exist')  // card loaded successfully
        cy.get('[data-testid= search]').should('exist').type('Angola{enter}')
        cy.get('[data-testid = card').first().then(()=> {
            cy.contains('Angola').should('exist')
        })
    }) //if you search a country completely the search is working fine.

    it('Partial word wise search is working fine' , () => {
        cy.get('[data-testid = card').should('exist')
        cy.get('[data-testid= search]').should('exist').type('Den')
        cy.get('[data-testid = card').first().then( () => {
            cy.contains('Denmark').should('exist')
        }) // the search is acually searching for a superstring for a paricular search but in a non in a sequential manner.
    })

    it('filter functionality works fine' , () => {
        cy.get('[data-testid = card]').should('exist')
        cy.get('[data-testid = filter]').should('exist').realHover()
        cy.get('[data-testid = filter-options').should('include.text','Asia','Americas','Europe','Oceania','Africa')
        // drop down is fine
        cy.wait(1000)
        cy.get('[data-testid = filter-options]').should('exist').contains('Africa').click().trigger('mouseout')
        cy.wait(1000)
        //cy.contains('Asia').should('not.exist')
        cy.get('[data-testid = card').first().then(()=> {
            cy.contains('Africa').should('exist')
        })
    })


})