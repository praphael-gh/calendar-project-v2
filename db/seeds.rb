jim = User.create(username: "jimbotron21")

day1 = Day.create(date: "Mon Jan 03 2022")

Event.create(name: "Happy Day", where: "Lalaland", description: "Idk", priority:3, user_id: jim.id, day_id: day1.id)
Event.create(name: "Happy Day1", where: "Lalaland2", description: "Idk2", priority:3, user_id: jim.id, day_id: day1.id)
Event.create(name: "Happy Day2", where: "Lalaland3", description: "Idk3", priority:3, user_id: jim.id, day_id: day1.id)
