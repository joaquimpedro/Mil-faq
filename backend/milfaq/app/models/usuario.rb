class Usuario < ActiveRecord::Base
	belongs_to :perfil

	validates :nome, :presence => {message: "Nome é obrigatório"}
	validates :sobrenome, :presence => {message: "Sobrenome é obrigatório"}
	validates :email, :presence => {message: "E-mail é obrigatório"}, :uniqueness => {message: "E-mail já registrado"}
	validates :perfil_id, :presence => {message: "Perfil é obrigatório"}

	def nome_completo
		@nome + " " + @sobrenome 
	end
end
