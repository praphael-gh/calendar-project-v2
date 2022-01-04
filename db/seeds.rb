    jim = User.create(name:"Jimbo", username: "jimbotron21", password: "memes")

day1 = Day.create(date: "Mon Jan 03 2022")

event1 = Event.create(name: "Happy Day", where: "Lalaland", description: "Idk
", priority:3, user_id: jim.id, day_id: day1.id)
