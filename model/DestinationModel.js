import { Sequelize } from "sequelize";
import db from "../database/db.js";

const {DataTypes} = Sequelize
const Destination = db.define(
    "destination",{
        place : DataTypes.STRING,
        location : DataTypes.STRING,
        pricerange : DataTypes.FLOAT,
        time : DataTypes.TIME,
        category : DataTypes.STRING,
        latitude : DataTypes.DOUBLE,
        longitude : DataTypes.DOUBLE
    }
)

db.sync().then(()=>console.log("review synchronized"))
export default Destination
