class PartiesController < ApplicationController
  # GET /active
  # GET /active.json
  def active
    @party = Party.find_by_active(true)

    respond_to do |format|
      format.html { render action: "show"}
      format.json { render json: @party }
    end
  end

  # GET /parties/1
  # GET /parties/1.json
  def show
    @party = Party.find(params[:id])

    respond_to do |format|
      format.html { render }
      format.json { render json: @party }
    end
  end

  def who
    @party = Party.find_by_active(true)
    respond_to do |format|
      format.html { render }
      format.json { render json: @party }
    end
  end

  def info
    @party = Party.find_by_active(true)
    respond_to do |format|
      format.html { render }
      format.json { render json: @party }
    end
  end

  def rsvp
    @party = Party.find_by_active(true)
    @hosts = @party.hosts
    respond_to do |format|
      format.html { render }
      format.json { render json: @party }
    end
  end

  def update
    @party = Party.find(params[:id])
    rsvp_params = params[:party][:rsvp]
    guest_params = rsvp_params[:guest]
    host = Host.find_by_name(rsvp_params[:host])
    guest = Guest.find_by_email(guest_params[:email]) || Guest.create!(guest_params)
    @party.rsvps.create!( host: host, guest: guest, num_guests: Integer(rsvp_params[:num_guests]))
    respond_to do |format|
      format.html { redirect_to @party, notice: 'Your RSVP has been accepted.' }
      format.json { render json: @party }
    end
  end
end
