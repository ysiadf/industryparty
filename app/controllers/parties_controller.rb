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

    respond_to do |format|
      format.html { render }
      format.json { render json: @party }
    end
  end

end
