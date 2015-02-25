json.array!(@articles) do |article|
  json.extract! article, :id, :name, :description, :section_id, :section_type, :serial_id
  json.url article_url(article, format: :json)
end
