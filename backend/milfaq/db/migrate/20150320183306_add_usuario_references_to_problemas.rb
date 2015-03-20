class AddUsuarioReferencesToProblemas < ActiveRecord::Migration
  def change
  	remove_column :problemas, :relator, :integer
    add_reference :problemas, :usuario, index: true
    add_foreign_key :problemas, :usuarios
  end
end
