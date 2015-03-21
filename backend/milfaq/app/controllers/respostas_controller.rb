class RespostasController < ApplicationController
  before_action :set_resposta, only: [:show, :edit, :update, :destroy]

  def index
    @respostas = Resposta.all
  end

  def show
  end

  def new
    @resposta = Resposta.new
  end

  def edit
  end

  def create
    @resposta = Resposta.new(resposta_params)

    respond_to do |format|
      if @resposta.save
        format.html { redirect_to @resposta, notice: 'Resposta was successfully created.' }
        format.json { render :show, status: :created, location: @resposta }
      else
        format.html { render :new }
        format.json { render json: @resposta.errors, status: :unprocessable_entity }
      end
    end 
  end

  def update
    respond_to do |format|
      if @resposta.update(resposta_params)
        format.html { redirect_to @resposta, notice: 'Resposta was successfully updated.' }
        format.json { render :show, status: :ok, location: @resposta }
      else
        format.html { render :edit }
        format.json { render json: @resposta.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @resposta.destroy
    respond_to do |format|
      format.html { redirect_to problemas_url, notice: 'Resposta was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resposta
      @resposta = Resposta.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resposta_params
      params.require(:resposta).permit(:descricao, :problema_id, :usuario_id)
    end
end
