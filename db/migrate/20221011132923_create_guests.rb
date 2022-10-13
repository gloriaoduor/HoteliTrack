class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :fname 
      t.string :sname
      t.integer :id_no
      t.string :nationality
      t.string :gender
      t.string :email
      t.integer :tel_no
      

      t.timestamps
    end
  end
end
