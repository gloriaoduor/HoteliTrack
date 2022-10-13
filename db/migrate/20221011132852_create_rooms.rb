class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_type 
      t.integer :room_number
      t.integer :price
      t.integer :admin_id 
      t.integer :guest_id 

      t.timestamps
    end
  end
end
