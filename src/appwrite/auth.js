import conf from '../conf/conf'
import {Client, Account, ID} from 'appwrite'
// import toast,{ Toaster } from 'react-hot-toast';
import { Slide, toast } from 'react-toastify';


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
            return null
        }
        } catch (error) {
            toast.warn(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
            
            console.log(`Error :: Appwrite Error :: createAccount: ${error}`)
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            toast.warn(error.type === 'user_invalid_credentials'? "The email or password you entered is incorrect. Please try again." : error.message , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
                console.log(error)
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