const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        motivo:{
            type:String,
            max:300
        },
        fecha:{
            type:Date,
            
        },
        estado:{
            type:Number,
            max:1
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("task",TaskSchema);