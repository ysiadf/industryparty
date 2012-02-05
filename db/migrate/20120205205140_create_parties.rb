class CreateParties < ActiveRecord::Migration
  def change
    create_table :parties do |t|
      t.string :name
      t.text :info
      t.datetime :start
      t.boolean :active

      t.timestamps
    end
  end
end
