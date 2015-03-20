class PerfisController < ApplicationController
	before_action :set_perfil, only: [:show, :edit, :update, :destroy]

	def index
 		@perfis = Perfil.all
	end

	def show
	end

	def new
		@perfil = Perfil.new
	end

	def edit
	end

	def create
		@perfil = Perfil.new(perfil_params)
		respond_to do |format|
			if @perfil.save
				format.html { redirect_to @perfil, notice: 'Perfil criado com sucesso.' }
		        format.json { render :show, status: :created, location: @perfil }
		    else
		        format.html { render :new }
		        format.json { render json: @perfil.errors, status: :unprocessable_entity }
			end
		end
	end

	def update
		@perfil = Perfil.new(perfil_params)
		respond_to do |format|
			if @perfil.update
				format.html { redirect_to @perfil, notice: 'Perfil atualizado com sucesso.' }
		        format.json { render :show, status: :created, location: @perfil }
		    else
		        format.html { render :new }
		        format.json { render json: @perfil.errors, status: :unprocessable_entity }
			end
		end
	end

	def destroy
		@perfil.destroy
		respond_to do |format|
			format.html { redirect_to perfis_url, notice: 'Perfil deletado com sucesso.' }
	        format.json { head :no_content}
        end
    end

	private
		def set_perfil
			@perfil = Perfil.find(params[:id])
		end

		def perfil_params
			params.require(:perfil).permit(:descricao)
		end
end
