import {Request,Response} from 'express';
import { ContactController } from "../controllers/crmController";
import * as path from 'path';
export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app):void{
        app.route('/api/contact')
            .post(this.contactController.addNewContact)
            .get(this.contactController.getContacts);
        app.route('/api/contact/:contactId')
            .get(this.contactController.getContactWithID);
        app.route('/*')
            .get((req: Request,res: Response)=>{
                res.sendFile(path.resolve('../client/index.html'));
            });
    }
}