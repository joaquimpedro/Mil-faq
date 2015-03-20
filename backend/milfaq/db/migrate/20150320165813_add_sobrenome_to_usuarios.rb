class AddSobrenomeToUsuarios < ActiveRecord::Migration
  def change
    add_column :usuarios, :sobrenome, :string
  end
end
