class Api::V1::BuildsController < ApplicationController

    before_action :set_build, only: [:show, :create]

    def index
        @build = Build.all 
    end 

    def show 
        render json: @build
    end 

    def create 
        @build = Build.new
        if @build.save
            render json: BuildSerializer.new(@build), status: :ok
        else 
            @build == 0 
            render json: @build.error 
        end
    end 
    
    private 

    def create_params 
        params.permit(:build, :id, :description)
    end

    def set_build
        @build = Build.find_by(id: params[:id])
    end

end