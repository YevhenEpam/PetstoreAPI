import * as chai from 'chai';
import * as ApiHelper from '../Helpers/apiHelper.js';
import testData from '../testData/testData.json' assert { type: 'json' };
const expect = chai.expect;

describe('Petstore API automation', function() {
  
    it('Should allow creating a user', async function() {
        const userCreateresponse = await ApiHelper.createUser(testData.createUser);
        expect(userCreateresponse.status).to.equal(200,`Create user API call returned with ${userCreateresponse.status} status`);
        const getUserResponse = await ApiHelper.getUser(testData.createUser.username);
        expect (getUserResponse.status).to.eq(200,`Get user API call returned with ${getUserResponse.status} status`)

    });

    it('Should allow login as a User', async function() {
        const response = await ApiHelper.userLogin(testData.userLogin.username, testData.userLogin.password);
        expect(response.status).to.equal(200, `Login user API call returned with ${response.status} status`);
        expect(response.data.message).to.match(/^logged in user session/);
    });

    it('Should allow creating the list of Users', async function() {
        const usersCreateresponse = await ApiHelper.createUserList(testData.createUsersList);
        expect(usersCreateresponse.status).to.equal(200,`Create users API call returned with ${usersCreateresponse.status} status`);
        const getUser1Response = await ApiHelper.getUser(testData.createUsersList[0].username);
        expect (getUser1Response.status).to.eq(200,`Get user API call returned with ${getUser1Response.status} status`);
        const getUser2Response = await ApiHelper.getUser(testData.createUsersList[1].username);
        expect (getUser2Response.status).to.eq(200,`Get user API call returned with ${getUser2Response.status} status`);
    });

    it('Should allow logout a User', async function() {
        const loginResponse = await ApiHelper.userLogin(testData.userLogin.username, testData.userLogin.password);
        expect(loginResponse.status).to.equal(200, `Login user API call returned with ${loginResponse.status} status`);
        expect(loginResponse.data.message).to.match(/^logged in user session/);
        const logoutResponse = await ApiHelper.userLogout();
        expect(logoutResponse.status).to.equal(200, `Logout user API call returned with ${logoutResponse.status} status`);
    });

    it('Should allows adding a new Pet', async function() {
        const response = await ApiHelper.addNewPet(testData.createNewPet);
        expect(response.status).to.equal(200, `Add new pet API call returned with ${response.status} status`);
    });

    it('Should allows allows updating Pet’s image, name and status', async function() {
        const response = await ApiHelper.updatePet(testData.updatePet);
        expect(response.status).to.equal(200, `Update new pet API call returned with ${response.status} status`);
    });

    it('Should allows allows deleting Pet', async function() {
        const addNewPetResponse = await ApiHelper.addNewPet(testData.createNewPet);
        expect(addNewPetResponse.status).to.equal(200, `Add new pet API call returned with ${addNewPetResponse.status} status`);
        const deletePetResponse = await ApiHelper.deletePet(addNewPetResponse.data.id);
        expect(deletePetResponse.status).to.equal(200, `Delete pet API call returned with ${deletePetResponse.status} status`);
    });

});