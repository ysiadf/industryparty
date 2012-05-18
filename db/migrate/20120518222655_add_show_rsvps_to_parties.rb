class AddShowRsvpsToParties < ActiveRecord::Migration
  def change
    add_column :parties, :show_rsvps, :boolean

  end
end
