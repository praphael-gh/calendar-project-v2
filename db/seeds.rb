jim = User.create(name:"Jimbo", username: "jimbotron21", password: "memes")

day1 = Day.create(date: "12/21/21")

event1 = Event.create(name: "Happy Day", country: "Lalaland", location: "Local", rating:3, user_id: 1, day_id: 1)