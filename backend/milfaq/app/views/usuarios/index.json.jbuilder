json.array!(@usuarios) do |usuario|
  	json.extract! usuario, :id, :nome_completo, :email

	json.perfil do
		json.id usuario.perfil.id
		json.descricao usuario.perfil.descricao
	end
end
