class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.string :title
      t.string :email
      t.string :company
      t.string :phone
      t.integer :num_guests
      t.references :industry

      t.timestamps
    end
    add_index :guests, :industry_id
  end
end
