class CreateRespostas < ActiveRecord::Migration
  def change
    create_table :respostas do |t|
      t.text :descricao
      t.references :usuario, index: true
      t.references :problema, index: true

      t.timestamps null: false
    end
    add_foreign_key :respostas, :usuarios
    add_foreign_key :respostas, :problemas
  end
end
