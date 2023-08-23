module.exports = {
  DB_NAME: "crm_db",
  DB_URL:
    process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.USER_NAME_ID}:${process.env.PASSWORD}@cluster0.cefhlpu.mongodb.net/?retryWrites=true&w=majority`,
};

