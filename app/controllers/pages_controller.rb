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
      "#{Rails.root}/public/TEST.pdf",
      filename: "TEST.pdf",
      type: "application/pdf"
    )
  end

  def index
  
  end
end
