class Api::V1::PartsController < ApplicationController

    def index
        @parts = Part.all 
        render json: PartSerializer.new(@parts), status: :ok
    end 

    def show 
        render json: PartSerializer.new(@part), status: :ok 
    end 

    def update 
        @part.destroy 
        flash[:notice] = "Updated parts."
        render json: @part 
    end

    def destroy 
        @part.destroy
        flash[:notice] = "Part deleted."
        render json: @part 
    end

    private 

    def create_params
        params.require(:part).permit(:name, :price, :component)
    end

    def set_part 
        @part = Part.find_by(id: params[:id])
    end
end
