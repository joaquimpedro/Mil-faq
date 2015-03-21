class Resposta < ActiveRecord::Base
  belongs_to :usuario
  belongs_to :problema
end
