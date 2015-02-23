class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :name
      t.text :description
      t.text :content
      t.references :section, polymorphic: true, index: true
      t.references :serial, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
