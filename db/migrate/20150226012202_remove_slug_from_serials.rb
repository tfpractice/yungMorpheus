class RemoveSlugFromSerials < ActiveRecord::Migration
  def change
    remove_column :serials, :slug, :string
  end
end
