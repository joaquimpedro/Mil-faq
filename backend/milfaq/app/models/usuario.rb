class Usuario < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  include DeviseTokenAuth::Concerns::User
	belongs_to :perfil
	has_many :problemas, dependent: :destroy
	has_many :respostas, dependent: :destroy

	def nome_completo
		self.nome + " " + self.sobrenome 
	end

end
