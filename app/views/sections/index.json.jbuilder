json.array!(@sections) do |section|
  json.extract! section, :id, :name, :description, :published
  json.url section_url(section, format: :json)
end
