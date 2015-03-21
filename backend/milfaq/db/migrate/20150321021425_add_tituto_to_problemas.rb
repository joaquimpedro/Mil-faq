class AddTitutoToProblemas < ActiveRecord::Migration
  def change
    add_column :problemas, :titulo, :string
  end
end
