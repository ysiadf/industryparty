class AddIndustryListIdToParties < ActiveRecord::Migration
  def change
    add_column :parties, :industry_list_id, :integer
    add_index :parties, :industry_list_id
  end
end
