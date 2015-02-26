class RemoveSlugFromSections < ActiveRecord::Migration
  def change
    remove_column :sections, :slug, :string
  end
end
