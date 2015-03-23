class Resposta < ActiveRecord::Base
  belongs_to :usuario
  belongs_to :problema

  validates :descricao, :presence => {message: "Descriçao da resposta e obrigatoria"}
  validates :usuario_id, :presence => {message: "Usuario da resposta e obrigatorio"}
  validates :problema_id, :presence => {message: "Problema_id  e obrigatorio"}
end
