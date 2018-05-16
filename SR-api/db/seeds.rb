# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


events = Event.create(
  [
    {
      areasCovered: "Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
      directions: "L train to Grand Avenue. Walk 2 blocks north on Bushwick Avenue, bar is on the left on the corner of Bushwick and Ainslie.",
      name: "Matt Torrey's",
      transportStation: "Grand Street (L train)",
      longDate: "2017-06-27T19:00:00",
      day: "tuesday",
      start: "7",
      end: "9",
      city: "Brooklyn",
      address: "46 Bushwick Ave, Ainslie Street",
      geoloc: "40.7134658,-73.9415119",
      zip: "11211"
    }
  ])
