class AddDataToDatasets < ActiveRecord::Migration
  def change
    add_column :datasets, :data, :string
  end
end
