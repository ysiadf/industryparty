class CreateIndustryLists < ActiveRecord::Migration
  def change
    create_table :industry_lists do |t|
      t.string :name

      t.timestamps
    end
  end
end
