class AddHeaderToSections < ActiveRecord::Migration
  def change
    add_column :sections, :header, :string
  end
end
