class ProblemasController < ApplicationController
  before_action :authenticate_usuario!
  before_action :set_problema, only: [:show, :edit, :update, :destroy]

  # GET /problemas
  # GET /problemas.json
  def index
    @problemas = Problema.all
  end

  # GET /problemas/1
  # GET /problemas/1.json
  def show
  end

  # GET /problemas/new
  def new
    @problema = Problema.new
  end

  # GET /problemas/1/edit
  def edit
  end

  # POST /problemas
  # POST /problemas.json
  def create
    @problema = Problema.new(problema_params)

    respond_to do |format|
      if @problema.save
        format.html { redirect_to @problema, notice: 'Problema was successfully created.' }
        format.json { render :show, status: :created, location: @problema }
      else
        format.html { render :new }
        format.json { render json: @problema.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /problemas/1
  # PATCH/PUT /problemas/1.json
  def update
    respond_to do |format|
      if @problema.update(problema_params)
        format.html { redirect_to @problema, notice: 'Problema was successfully updated.' }
        format.json { render :show, status: :ok, location: @problema }
      else
        format.html { render :edit }
        format.json { render json: @problema.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /problemas/1
  # DELETE /problemas/1.json
  def destroy
    @problema.destroy
    respond_to do |format|
      format.html { redirect_to problemas_url, notice: 'Problema was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_problema
      @problema = Problema.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def problema_params
      params.require(:problema).permit(:titulo, :descricao, :resposta, :status_id, :usuario_id)
    end
end
