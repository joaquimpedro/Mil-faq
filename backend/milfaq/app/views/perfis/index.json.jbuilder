json.array!(@perfis) do |perfil|
  json.extract! perfil, :id, :descricao
end
