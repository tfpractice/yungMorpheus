class AddSlugToSerial < ActiveRecord::Migration
  def change
    add_column :serials, :slug, :string
    add_index :serials, :slug, unique: true
  end
end
