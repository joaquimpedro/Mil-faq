class AddStatusReferencesToProblemas < ActiveRecord::Migration
  def change
  	remove_column :problemas, :status, :integer
    add_reference :problemas, :status, index: true
    add_foreign_key :problemas, :status
  end
end
