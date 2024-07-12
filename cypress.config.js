//cypress.config.js
//we will be configuring cypress
const {defConfig, defineConfig}=require('cypress')
module.exports=defineConfig({
    e2e:{
        baseUrl:'http://localhost:3000',
        setupNodeEvents(on,config){
        },
    },
});