class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :fname 
      t.string :sname
      t.string :gender
      t.integer :id_no
      t.boolean :is_citizen

      t.timestamps
    end
  end
end
