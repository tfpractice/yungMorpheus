class AddPublishedToSerials < ActiveRecord::Migration
  def change
    add_column :serials, :published, :boolean
  end
end
