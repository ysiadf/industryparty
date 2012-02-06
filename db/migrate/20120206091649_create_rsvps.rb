class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.references :guest
      t.references :host
      t.references :party
      t.integer :num_guests

      t.timestamps
    end
    add_index :rsvps, :guest_id
    add_index :rsvps, :host_id
    add_index :rsvps, :party_id
  end
end
