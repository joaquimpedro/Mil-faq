class AlteraDescricaoParaText < ActiveRecord::Migration
  def change
  	change_column :problemas, :descricao,  :text
  end
end
