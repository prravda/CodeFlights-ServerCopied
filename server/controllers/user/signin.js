const { users }= require('../../models');

module.exports = {
  post: (req, res) => {
    const {
      email,
      password
    } = req.body;
    let session = req.session
    users.findOne({
      where: {
        email: email,
        password: password
      }
    }).then(result => {
      if (!result) res.status(401).send(JSON.stringify({
        status: false
      }))
      else {
        session.userid = result.id;
        res.status(201).send(JSON.stringify({
          status: true
        }))
      }
    })
  }
}