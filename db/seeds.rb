# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Item.destroy_all
List.destroy_all

# Item.create [
#   {
#     title: "motorola-xoom-with-wi-fi",
#     image_url400: "http://www.surfinginmorocco.com/wp-content/uploads/2013/06/fatback-surfboard-bottom.jpg",
#     description: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).", 
#     id: 0
#   },
#   {
#     title: "motorola-xoom",
#     image_url400: "http://www.surfinginmorocco.com/wp-content/uploads/2013/06/fatback-surfboard-top.jpg",
#     description: "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).", 
#     id: 1
#   },
#   {
#     title: "dell-streak-7",
#     image_url400: "http://www.oceanstyles.com/images/miscwall/W12193.jpg?rand=309871201",
#     description: "MOTOROLA ATRIX 4G the world's most powerful smartphone.", 
#     id: 2
#   },
#   {
#     title: "samsung-galaxy-tab",
#     image_url400: "http://www.oceanstyles.com/images/miscwall/W12445.jpg?rand=202822207", 
#     description: "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility.", 
#     id: 3
#   }
# ]

List.create [
  {title: 'SkyBell Wi-Fi Video Doorbell Version 2.0', category: 'tech', price: 197.99, user_id: 1},
  {title: 'boots', category: 'shoes', price: 32.23, sex: 'female', user_id: 2},
  {title: 'tennis racket', category: 'sports', price: 79.93, user_id: 2},
  {title: 'product 2', category: 'sports', price: 788.93, user_id: 1},
  {title: 'product 3', category: 'sports', price: 552.93, user_id: 2}
]
