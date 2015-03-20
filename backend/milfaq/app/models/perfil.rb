class Perfil < ActiveRecord::Base
	validates :descricao, :presence => {message: "Descrição é obrigatória"}, :uniqueness => {message: "Descrição já cadastrada"}
end
