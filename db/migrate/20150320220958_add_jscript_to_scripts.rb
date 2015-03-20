class AddJscriptToScripts < ActiveRecord::Migration
  def change
    add_column :scripts, :jscript, :string
  end
end
