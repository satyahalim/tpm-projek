import { Sequelize } from "sequelize";
import db from "../database/db.js";

const {DataTypes} = Sequelize
const Review = db.define(
    "review",{
        name : DataTypes.STRING,
        location : DataTypes.STRING,
        price : DataTypes.FLOAT,
        review : DataTypes.TEXT,
        image : DataTypes.TEXT,
        category : DataTypes.STRING,
        recommended: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
)

db.sync().then(()=>console.log("review synchronized"))
export default Review
