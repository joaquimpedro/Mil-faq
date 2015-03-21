json.array!(@respostas) do |resposta|
  json.extract! resposta, :id, :descricao, :problema_id, :usuario_id
end
