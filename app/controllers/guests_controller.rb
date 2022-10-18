class GuestsController < ApplicationController
    def create 
        guest = Guest.create(permit_params)
        render json: guest, status: :created
    end 

    def index
        guests = Guest.all
        render json: guests, status: :ok
    end 

    def update 
        guest = Guest.find_by(id: params[:id])
        if guest
            guest.update(permit_params)
            render json: guest, status: :ok
        else 
            render json: {error: "This guest has not been checked in"}
        end 
    end 

    def destroy
        guest = Guest.find_by(id: params[:id])
        if guest
            guest.destroy
            head :no_content
        else 
            render json: {error: "This guest does not exist"}
        end 

    end 

    private 
    def permit_params
        params.permit(:fname, :sname, :id_no, :nationality, :gender, :email, :tel_no)
    end 
end
