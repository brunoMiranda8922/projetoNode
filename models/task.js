module.exports = app => { 
  return { 
    findAll: (params, callback) => { 
      return callback([
        {title: "Estudar PHP"},
        {title: "Estudar NODE"},
      ]);
    }
  };
};