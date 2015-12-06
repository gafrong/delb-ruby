# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Item.destroy_all
List.destroy_all



List.create [
  {title: 'SkyBell Wi-Fi Video Doorbell Version 2.0', category: 'tech', price: 197.99, user_id: 1},
  {title: 'boots', category: 'shoes', price: 32.23, sex: 'female', user_id: 2},
  {title: 'tennis racket', category: 'sports', price: 79.93, user_id: 2},
  {title: 'product 2', category: 'sports', price: 788.93, user_id: 1},
  {title: 'product 3', category: 'sports', price: 552.93, user_id: 2}
]
