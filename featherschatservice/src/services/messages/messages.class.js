const feathers = require('feathers');
const { Service } = require('feathers-mongodb');

exports.Messages = class Messages extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('messages');
    });
  }
  async create(data,params){
    return super.create(data, params);
  }
};
