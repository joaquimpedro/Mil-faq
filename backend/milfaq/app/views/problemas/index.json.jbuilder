json.array!(@problemas) do |problema|
  json.extract! problema, :id, :titulo, :descricao, :resposta, :status, :usuario, :created_at
end
