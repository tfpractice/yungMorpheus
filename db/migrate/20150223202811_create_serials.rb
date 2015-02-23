class CreateSerials < ActiveRecord::Migration
  def change
    create_table :serials do |t|
      t.string :name
      t.text :description
      t.references :section, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
