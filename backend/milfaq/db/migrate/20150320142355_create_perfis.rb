class CreatePerfis < ActiveRecord::Migration
  def change
    create_table :perfis do |t|
      t.string :descricao

      t.timestamps null: false
    end
  end
end
