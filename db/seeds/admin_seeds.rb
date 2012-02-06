User.find_by_email("mccann333@gmail.com") || User.create!(email: "mccann333@gmail.com",
                                                          password: "testing123")