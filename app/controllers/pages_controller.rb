class PagesController < ApplicationController
  def home
  end

  def download_pdf_en
    send_file(
      "#{Rails.root}/public/TEST.pdf",
      filename: "TEST.pdf",
      type: "application/pdf"
    )
  end

  def download_pdf_fr
    send_file(
      "#{Rails.root}/public/CV_Camille_LAGUERRE_2022_FR.pdf",
      filename: "CV_Camille_LAGUERRE.pdf",
      type: "application/pdf"
    )
  end

  def index
  
  end
end
