class CreateDatasets < ActiveRecord::Migration
  def change
    create_table :datasets do |t|
      t.string :name
      t.references :article, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
