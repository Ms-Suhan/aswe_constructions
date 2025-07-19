import conf from "../conf/conf";

import { Client, Account, ID, Databases,Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createQuery({name, email, phone_number, message}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    name,
                    email,
                    phone_number,
                    message
                }
            )
        } catch (error) {
            console.log(`Error :: Appwrite Error :: createQuery: ${error}`)
        }
    }
}

const service = new Service();

export default service;