json.extract! @usuario, :id, :nome, :email, :sobrenome, :nome_completo,  :created_at, :updated_at
json.perfil do
	json.id @usuario.perfil.id
	json.descricao @usuario.perfil.descricao
end
