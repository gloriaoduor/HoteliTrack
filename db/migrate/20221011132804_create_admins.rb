class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :email
      t.string :password
      t.string :name 
      t.string :location
      t.boolean :is_admin

      t.timestamps
    end
  end
end
