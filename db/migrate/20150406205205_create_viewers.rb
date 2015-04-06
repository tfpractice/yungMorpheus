class CreateViewers < ActiveRecord::Migration
  def change
    create_table :viewers do |t|
      t.string :provider
      t.string :uid
      t.string :screenname

      t.timestamps null: false
    end
  end
end
