class AddFlierToParty < ActiveRecord::Migration
  def change
    change_table :parties do |t|
      t.string :flier_file_name
      t.string :flier_content_type
      t.integer :flier_file_size
      t.datetime :flier_updated_at
    end
  end
end
