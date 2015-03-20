class Status < ActiveRecord::Base

	validates :descricao, :presence => {message: "Descrição é obrigatória"}, :uniqueness => {message: "Descrição ja cadastrada"}
end
