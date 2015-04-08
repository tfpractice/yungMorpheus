class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :authorable, polymorphic: true, index: true
      t.references :commentable, polymorphic: true, index: true
      t.string :content

      t.timestamps null: false
    end
  end
end
