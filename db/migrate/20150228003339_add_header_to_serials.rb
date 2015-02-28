class AddHeaderToSerials < ActiveRecord::Migration
  def change
    add_column :serials, :header, :string
  end
end
