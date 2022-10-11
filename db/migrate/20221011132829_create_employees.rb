class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name 
      t.integer :admin_id
      t.integer :guest_id


      t.timestamps
    end
  end
end
