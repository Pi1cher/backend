import { model, Schema } from "mongoose";

const superheroModel = new Schema({
    nickname: {type: String, required: true},
    real_name: {type: String, required: true},
    origin_description: {type: String, required: true},
    superpowers: {type: String, required: true},
    catch_phrase: {type: String, required: true},
    images:[ {
        name: {type: String},
        img: {
            path: {type: String},
            contentType: {type: String}
        }
    }]

  },
    {collection: 'superheroes', versionKey: false}
);

export const Superhero = model("superhero", superheroModel);
