class CreateHostsParties < ActiveRecord::Migration
  def change
    create_table :hosts_parties, :id => false do |t|
      t.references :host
      t.references :party
    end
  end
end
