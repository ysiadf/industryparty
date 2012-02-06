class CreateIndustriesIndustryLists < ActiveRecord::Migration
  def change
    create_table :industries_industry_lists, :id => false do |t|
      t.references :industry
      t.references :industry_list
    end
  end
end
