/**
 * Created by fushengyxx on 16/5/14.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseModel = require('./base_model');
var ObjectId = Schema.ObjectId;

var StorySchema = new Schema({
    _id: {type: ObjectId},
    user_id: {type: ObjectId},
    story_id: {type: ObjectId},
    create_time: {type: Date, default: Date.now}
});

StorySchema.plugin(BaseModel());
mongoose.model('Story', StorySchema);