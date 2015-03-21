class Usuario < ActiveRecord::Base
	belongs_to :perfil
	has_many :problemas, dependent: :destroy
	has_many :respostas, dependent: :destroy

	validates :nome, :presence => {message: "Nome é obrigatório"}
	validates :sobrenome, :presence => {message: "Sobrenome é obrigatório"}
	validates :email, :presence => {message: "E-mail é obrigatório"}, :uniqueness => {message: "E-mail já registrado", case_sensitive: false}
	validates :perfil_id, :presence => {message: "Perfil é obrigatório"}

	def nome_completo
		self.nome + " " + self.sobrenome 
	end

end
