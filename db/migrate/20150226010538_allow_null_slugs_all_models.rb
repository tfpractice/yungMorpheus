class AllowNullSlugsAllModels < ActiveRecord::Migration
  def change
  	change_column_null :sections, :slug, true
  	change_column_null :serials, :slug, true
  	change_column_null :articles, :slug, true
  end
end
