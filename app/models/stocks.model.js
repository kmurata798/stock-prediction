module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          name: String,
          data: String
        //   date: String,
        //   open: String,
        //   high: String,
        //   low: String,
        //   close: String
        },
        { timestamps: true }
      );
  
    // React is going to need the 'id' field, but mongo creates '_id'. Modify toJSON
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Stocks = mongoose.model("stocks", schema);
    return Stocks;
  };