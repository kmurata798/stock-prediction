module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      rating: String,
      chosen: Boolean
    },
    { timestamps: true }
  );

  // React is going to need the 'id' field, but mongo creates '_id'. Modify toJSON
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Company = mongoose.model("company", schema);
  return Company;
};