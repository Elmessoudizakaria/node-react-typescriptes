import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { Routes } from "./routes/crmRoutes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public monogUrl: string = 'mongodb://localhost:27017/eBook';

    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(express.static(__dirname+'/client'));
    }
    private mongoSetup(): void{
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.monogUrl,{useNewUrlParser: true});
    }
}

export default new App().app;