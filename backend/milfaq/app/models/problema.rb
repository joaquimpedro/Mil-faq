class Problema < ActiveRecord::Base
	belongs_to :usuario
	belongs_to :status

	has_many :respostas

	validates :descricao, :presence => {message: "Descrição é obrigatória"}
	validates :usuario_id, :presence => {message: "Relator é obrigatório"}
	validates :status_id, :presence => {message: "Status é obrigatório"}

	def self.pesquisar(titulo)
    	@problemas = Problema.where("titulo ILIKE ?", "%#{titulo}%")
  	end
end
