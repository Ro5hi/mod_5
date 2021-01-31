class API::V1::BuildsController < ApplicationController

    def index
        @build = Build.all 
    end 

    def show 
        render json: BuildSerializer.new(@build), status: :ok
    end 

    def create 
        @build = Build.build(create_params)
        if @build.save 
            render json: BuildSerializer.new(@build), status: :ok
        else 
            @build == 0 
            render json: @build.error 
        end 
    end 
    
    private 

    def create_params 
        params.require(:build).permit(:parts, :description)
    end

    def set_build
        @build = Build.find_by(id: params[:id])
    end

end