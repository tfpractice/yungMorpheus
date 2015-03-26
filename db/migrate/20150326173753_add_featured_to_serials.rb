class AddFeaturedToSerials < ActiveRecord::Migration
  def change
    add_column :serials, :featured, :boolean
  end
end
