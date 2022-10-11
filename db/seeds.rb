# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Guest.create("fname": "Gloria", "sname": "Oduor", "gender": "female", "id_no": "123456", "is_citizen": true )
Guest.create("fname": "Aphonso", "sname": "Kip", "gender": "male", "id_no": "654321", "is_citizen": true )
Guest.create("fname": "Rosita", "sname": "Paloma", "gender": "female", "id_no": "994876", "is_citizen": false )
Guest.create("fname": "Daniel", "sname": "Spielburgh", "gender": "male", "id_no": "447556", "is_citizen": false )
Guest.create("fname": "Grace", "sname": "Mercy", "gender": "female", "id_no": "423456", "is_citizen": true )

Room.create("room_type": "Deluxe", "price": 15000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Single", "price": 5000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Pent", "price": 25000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Double", "price": 10000 , "admin_id": "", "guest_id": " ")
Room.create("room_type": "Suite", "price": 30000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Deluxe", "price": 15000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Single", "price": 5000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Pent", "price": 25000, "admin_id": "", "guest_id": " ")
Room.create("room_type": "Double", "price": 10000 , "admin_id": "", "guest_id": " ")
Room.create("room_type": "Suite", "price": 30000, "admin_id": "", "guest_id": " ")

Employee.create("name": "", "admin_id": 1, "guest_id": 1)
Employee.create("name": "", "admin_id": 1, "guest_id": 1) #create different ids for guest/emp
Employee.create("name": "", "admin_id": 1, "guest_id": 1)
Employee.create("name": "", "admin_id": 1, "guest_id": 1)
Employee.create("name": "", "admin_id": 1, "guest_id": 1)




