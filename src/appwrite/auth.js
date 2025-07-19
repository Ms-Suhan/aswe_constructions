import conf from '../conf/conf'
import {Client, Account, ID} from 'appwrite'


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            // login user
        }else{
            return userAccount
        }
        } catch (error) {
            console.log(`Error :: Appwrite Error :: createAccount: ${error}`)
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log(`Error :: Appwrite Error :: login: ${error}`)
        }
        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(`Error :: Appwrite Error :: logout: ${error}`)
        }
    }
}

const authService = new AuthService();

export default authService;